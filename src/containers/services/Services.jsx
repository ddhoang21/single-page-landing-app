import React from 'react';
import Feature from '../../components/feature/Feature';
import './services.css';

const servicesData = [
    {
        title: 'Security & Compliance', 
        text: 'Ensure that your infrastructure follows the security best practices'
    },
    {
        title: 'Strategic Consulting',
        text: 'Offer architectural guidance on starting and optimizing your projects'
    },
    {
        title: 'Cost',
        text: 'Reduce your bill by optimizing your environments and configurations'
    },
    {
        title: 'DevOps',
        text: 'Give you hands-on help with the build and release process'
    },
    {
        title: 'Cloud Migration',
        text: 'Show you the most efficient way to migrate your workloads to the cloud'
    },
    {
        title: 'Build Application', 
        text: 'Build highly scalable applications using cloud native services'
    }
]

const Services = () => {
    return (
        <div className='services section__padding' id='services'>
            <div className='services-heading'>
                <h1 className='gradient__text'>Explore our services and let us know if it fits your needs</h1>
            </div>
            <div className='services-container'>
                {servicesData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Services;
