import React from 'react';
import Biography from '../../components/biography/Biography';
// import Z  from '../../assets/vkbe-Z.png';
// import DH from '../../assets/vkbe-DH.png';
import './team.css';

const Team = () => {
    return (
        <div className='team section__padding' id='team'>
            <div className='team-heading'>
                <h1 className='gradient__text'>Meet our team</h1>
            </div>
            <div className='team-container'>
                <Biography name='Zlatko Porobic' status='Co-Founder' text='Zlatko excels at designing and developing high performing systems. He builds enterprise grade applications with a strong expertise in real-time stream processing. Along with his deep technical background, he emphasizes the importance of mature build and release pipelines to ensure efficient software development life cycles. He is driven by the concept of infrastructure as code.'/>
                <Biography name='Duc-Huy Do' status='Co-Founder' text='Duc-Huy has experience in delivering end-to-end products from various industries. He works closely with stake-holders from engineers, leadership to end-users for minimizing any risk during the development phase. He focuses on designing the cloud infrastructure and the application development with experience in serverless architecture for web-based applications. He is a cyber-security enthusiast.'/>
            </div>
        </div>
    )
}

export default Team;
