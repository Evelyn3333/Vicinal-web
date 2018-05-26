import React from 'react';
import { Form, Input, Button, Upload, Icon } from 'antd';

const FormItem = Form.Item;

class CreatePostForm extends React.Component {
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    beforeUpload = () => {
        return false;
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form layout="vertical">
                <FormItem label="Message">
                    {getFieldDecorator('message', {
                        rules: [{ required: true, message: 'Please input your message.' }],
                    })(
                        <Input placeholder="What's in your mind?"/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Image"
                >
                    {getFieldDecorator('upload', {
                        rules: [{ required: true, message: "Please upload your file." }],
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture" beforeUpload={this.beforeUpload}>
                            <Button>
                                <Icon type="upload" /> Click to upload
                            </Button>
                        </Upload>
                    )}
                    <br/>

                    <div className="dropbox">
                        {getFieldDecorator('dragger', {

                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="/upload.do" beforeUpload={this.beforeUpload}>
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>
            </Form>
        );
    }
}

export const WrappedCreatePostForm = Form.create()(CreatePostForm);