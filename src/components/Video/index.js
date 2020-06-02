import React, { Component } from 'react';
import { Container, AvatarContainer } from './styles';
import { Text, TouchableOpacity, Platform, Button, Linking, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Upload } from "tus-js-client";
import RNFetchBlob from 'rn-fetch-blob'
import api from '../../services/api.js';
export default class Video extends Component {

  constructor() {
    super();

    this.state = {
      uploadedBytes: 0,
      totalBytes: 0,
      file: null,
      status: "no file selected",
      uploadUrl: null,
      videoSource: null,
      videoSize: null,
      videoPath: null,
      videoName: 'Nome do Video'
    }
  }

  getFileExtension = (uri) => {
    const match = /\.([a-zA-Z]+)$/.exec(uri);
    if (match !== null) {
      return match[1];
    }

    return "";
  }

  getMimeType = (extension) => {
    if (extension === "jpg") return "image/jpeg";
    return `image/${extension}`;
  }

  startUpload = async () => {
    const file = { uri: this.state.videoSource };
    if (!file) return;

    let raw = {
      name: this.state.videoName || 'Smart',
      description: 'Video de teste de API do Vimeo',
      upload: { approach: 'tus', size: this.state.videoSize }
    };

    const { data } = await api.post('me/videos', JSON.stringify(raw));
    console.log("Video -> startUpload -> data", data)


    const extension = this.getFileExtension(file.uri);

    const _upload = new Upload(file, {
      uploadUrl: data.upload.upload_link,
      retryDelays: [0, 1000, 3000, 5000],

      metadata: {
        filename: `video.${extension}`,
        filetype: this.getMimeType(extension)
      },
      onError: (error) => {
        this.setState({
          status: `upload failed ${error}`
        });
      },
      onProgress: (uploadedBytes, totalBytes) => {
        this.setState({
          totalBytes: this.convertBytes(totalBytes),
          uploadedBytes: this.convertBytes(uploadedBytes)
        });
      },
      onSuccess: () => {
        this.setState({
          status: "upload finished",
        });
      }
    });

    _upload.start();


    this.setState({
      status: "upload started",
      uploadedBytes: 0,
      totalBytes: 0,
      uploadUrl: _upload.url
    });

  }

  openUploadUrl() {
    Linking.openURL(this.state.uploadUrl);
  }

  convertBytes(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

    if (bytes == 0) {
      return "n/a"
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

    if (i == 0) {
      return bytes + " " + sizes[i]
    }

    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

  selectVideoTapped = () => {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Gravar Video...',
      mediaType: 'video',
      videoQuality: 'high',
    };

    ImagePicker.showImagePicker(options, response => {

      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        this.setState({
          videoPath: (Platform.OS === "android") ? response.path : response.uri.replace('file://', ''),
          videoSource: response.uri,
          status: 'File Selected'
        });
        RNFetchBlob.fs.stat(this.state.videoPath).then((stats) => {
          this.setState({
            videoSize: stats.size
          })
        }).catch((err) => { console.log(err) })
      }
    });
  };
  render() {
    return (
      <Container>
        {this.state.videoSource
          ? <TextInput value={this.state.videoName} style={{ height: 40, width: '100%', marginVertical: 10, borderColor: 'gray', borderWidth: 1, color: '#000' }} onChangeText={(t) => this.setState({ videoName: t })} />
          : <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
            <AvatarContainer>
              <Text>Select a Video</Text>
            </AvatarContainer>
          </TouchableOpacity>
        }
        <Text>Status: {this.state.status}</Text>
        <Text>Size: {this.state.videoSize ? this.convertBytes(this.state.videoSize) : "no file selected"}</Text>
        <Text>{this.state.uploadedBytes} of {this.state.totalBytes}</Text>

        {this.state.videoSource &&
          <Button
            onPress={() => this.startUpload()}
            title="Upload File"
            accessibilityLabel="Open uploaded file"
          />
        }
      </Container>
    );
  }
}
