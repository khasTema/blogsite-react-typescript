import { useState } from "react"
import { InewPostState } from "../inteface"

export const useNewPost = () => {
    
    const [newPost, setNewPost] = useState<InewPostState>({
        userId: '',
        title: '',
        body: ''
      })
    
      const handleInputsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
      }
    
      const handleSubmit = ():void => {
         console.log(newPost)
         setNewPost({
            userId: '',
            title: '',
            body: ''
         })
      }

      return {newPost, handleInputsChange, handleSubmit}
}