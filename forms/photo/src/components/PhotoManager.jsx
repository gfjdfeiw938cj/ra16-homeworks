import {useState} from "react";
import {nanoid} from 'nanoid'
import Form from "./Form";
import Photo from "./Photo";

export default function PhotoManager() {

  const [photos, setPhotos] = useState([])

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    urls.forEach(item => setPhotos(prev => [...prev, {id: nanoid(), url: item}]))
  }

  const handleDelete = id => {
    setPhotos(prev => prev.filter(photo => photo.id !== id))
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form onAdd={handleSelect} />
        <div className="filesList">{photos.map(item => <Photo photo={item} key={item.id} onDelete={() => handleDelete(item.id)}/>)}</div>
      </div>
    </div>
  );
}
