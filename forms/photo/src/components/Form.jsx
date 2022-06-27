export default function Form({onAdd}) {
  return (
    <div className="uploader">
      <div className="fakeLoader">Click to select</div>
      <input type="file" id="files" multiple accept="image/*" onChange={onAdd} />
    </div>
  )
}
