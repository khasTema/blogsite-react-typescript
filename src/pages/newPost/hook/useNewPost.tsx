import { useState } from "react"
import { InewPostState } from "../inteface"
import { useDispatch } from 'react-redux'
import {updateState} from '../../../redux/postList'
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router"

export const useNewPost = () => {

   const dispatch = useDispatch()
   const navigate = useNavigate()
    
   const [newPost, setNewPost] = useState<InewPostState>({
      userId: '',
      title: '',
      body: ''
   })
    
   const handleInputsChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setNewPost({...newPost, [e.target.name]: e.target.value})
   }
   
   const handleSubmit = ():void => {

      const newId: string = nanoid()
      const publishPost = {newId,...newPost}
      console.log(publishPost)
      dispatch(updateState(publishPost))

      setNewPost({
         userId: '',
         title: '',
         body: ''
      })

      setTimeout(()=> navigate('/'), 3000)
   }

   return {newPost, handleInputsChange, handleSubmit}
}