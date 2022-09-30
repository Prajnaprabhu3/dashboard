import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import styles from '../styles/FAQ.module.scss'


const { Panel } = Collapse;

const text1 = `
 All the degree requirements will be mentioned on the application page.
`;


const text2 = `
  Official website of the company :)
`;


const text3 = `
  All of these details will either be provided or you can contact the recruiter incharge.
`;


const text4 = `
  Usually varies from company to company, but you'll hear back at max within a week of submitting your application.
`;


const text5 = `
 All the flexibility would either be mentioned on the website or application site, else you can contact the recruiter to get the required information.
`;


const FAQComponent: React.FC = () => {
    const onChange = (key: string | string[]) => {
      console.log(key);
    };
  
    return (
        <div className=''>
        <Collapse defaultActiveKey={['1']} onChange={onChange} className={` ${styles.faqWrapper}`}>
        <Panel header="What is the basic degree requirement for applying?" key="1">
          <p>{text1}</p>
        </Panel>
        <Panel header="Where can I get to know more about the company?" key="2">
          <p>{text2}</p>
        </Panel>
        <Panel header="Will there be stock options on joining?" key="3">
          <p>{text3}</p>
        </Panel>
        <Panel header="How long the recruitment process will be generally?" key="4">
          <p>{text4}</p>
        </Panel>
        <Panel header="Is there an option for remote work? " key="5">
          <p>{text5}</p>
        </Panel>
      </Collapse>
      </div>
    );
  };
  
 

export default FAQComponent