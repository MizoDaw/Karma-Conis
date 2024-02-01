import { Button, Upload, UploadFile } from 'antd'
import { UploadOutlined } from '@ant-design/icons';

const File = ({  label,set }: any) => {
  const imageUrl =  '';

  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: '',
      status: 'done',
      url: imageUrl,
      thumbUrl: imageUrl,
    }
  ];
  const FilehandleChange = (value:any) => {
    console.log( value?.file?.originFileObj);
    set(value?.file?.originFileObj)
    
  };
  const customRequest = async ({ onSuccess}: any) => {
    onSuccess();

  };
  return (
    <div className="KarimField">
      <label htmlFor={label} className="text">
        {(`${label}`)}
      </label>

      <Upload
        listType="picture"
        maxCount={1}
        className='w-100'
        defaultFileList={[...fileList]}
        onChange={ FilehandleChange}
        customRequest={customRequest}

      >
        <Button className='w-100' icon={<UploadOutlined  />}>{("upload_image")}</Button>
      </Upload>



    </div>
  )
}

export default File