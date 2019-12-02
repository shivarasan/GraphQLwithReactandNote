import React from "react";

const EditNote = () => (
    <div classNameName="container m-t-20">
      <h1 classNameName="page-title">Edit Note</h1>
​
      <div classNameName="newnote-page m-t-20">
        <form>
          <div classNameName="field">
            <label classNameName="label">Note Title</label>
            <div classNameName="control">
              <input classNameName="input" type="text" placeholder="Note Title" />
            </div>
          </div>
​
          <div className="field">
            <label className="label">Note Content</label>
            <div className="control">
              <textarea
                className="textarea"
                rows="10"
                placeholder="Note Content here..."
              />
            </div>
          </div>
​
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
)
export default EditNote;