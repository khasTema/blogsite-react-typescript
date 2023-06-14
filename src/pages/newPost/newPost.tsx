import styles from './newPost.module.css'
import { newPostConfig } from './newPost.config'
import { Button } from '../../components/UI/Button'
import { Input } from '../../components/UI/Input'
import { useNewPost } from './hook/useNewPost'

export const NewPost:React.FC = ():JSX.Element => {

  const {newPost, handleInputsChange, handleSubmit} = useNewPost()

  return (
    <div className={styles.wrapper}>
      <h1>{newPostConfig.header}</h1>
      <Input 
          placeholder={newPostConfig.authorInput} 
          name={'userId'} 
          value={newPost.userId} 
          handlerChangeFunc={handleInputsChange}
        />
      <Input 
          placeholder={newPostConfig.postTitleInput} 
          name={'title'} 
          value={newPost.title} 
          handlerChangeFunc={handleInputsChange}
        />
      <Input 
          placeholder={newPostConfig.postBodyInput} 
          name={'body'} 
          value={newPost.body} 
          handlerChangeFunc={handleInputsChange}
        />
      <Button linkTo='.' textBtn={newPostConfig.submitBtnText} handlerFunc={handleSubmit}/>
    </div>
  )
}

