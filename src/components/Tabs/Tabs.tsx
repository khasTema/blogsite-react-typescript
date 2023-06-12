import { useNumberOfTabs } from "./hook/useNumberOfTabs"
import { Tab } from "./Tab/Tab"
import styles from './Tabs.module.css'

export const Tabs: React.FC = ():JSX.Element => {


    const {numberOfTabs} = useNumberOfTabs()

  return (
    <div className={styles.wrapper}>
        {numberOfTabs.map(item => <Tab key={item} item={item}/>)}
    </div>
  )
}
