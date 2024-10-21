import React, {useState, useContext} from 'react'
import {Youtube} from '../Youtube'
const Form = () => {
  let {addReview} = useContext(Youtube);
  const [title, setTitle] =useState('');
  const [body, setbody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {body, title}
    console.log(newReview)
    setTitle('')
    setbody('')
    addReview(newReview)
  }

  return (
    <div className='bg-black h-[100px]'>
          <form action="" onSubmit={handleSubmit}>
        
        <div className='flex justify-between item-center px-[100px]'>
            <div><h1 className='text-white text-[29px]'>n<span className='text-[red] font-bold text-[40px]'>Flix</span></h1></div>


                <div>
                    <nav >
                      <input type="text" placeholder='Enter title' value={title}  onChange={(e) => setTitle(e.target.value) }/>
                    </nav>
                </div>

                <div>
                    <nav >
                      <input type="text" placeholder='Enter Text' value={body}  onChange={(e) => setbody(e.target.value) }/>
                    </nav>
                </div>
        </div>

                    <input type="submit" />
          </form>
       
    </div>
  )
}

export default Form