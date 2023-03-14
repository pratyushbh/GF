import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

const myImage = new CloudinaryImage('sample', {cloudName: 'dcshl7uuh'}).resize(fill().width(100).height(150));
const Iu=()=>{
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}

export default Iu;