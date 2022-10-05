import React from 'react';
import SingleEndPoint from './SingleEndPoint';

const DataEndPoints = [
  {
    id: 1,
    image: '/assets/Endpoint Security@4x.png',
    title: 'Endpoint Security',
    char1: 'Configuration Assessment',
    char2: 'Endpoint Detection & Response',
    char3: 'File Integrity Monitoring',
  },
  {
    id: 2,
    image: '/assets/Threat Intelligence@4x.png',
    title: 'Threat Intelligence',
    char1: 'Threat Hunting',
    char2: 'IT Hyigiene',
    char3: 'Vulnerability Detection',
  },
  {
    id: 3,
    image: '/assets/Security Ops@4x.png',
    title: 'Security Operations',
    char1: 'Log Data Analysis',
    char2: 'Malware Detection',
    char3: 'Audit & Compilance',
  },
  {
    id: 4,
    image: '/assets/Cloud Security@4x.png',
    title: 'Cloud Security',
    char1: 'Posture Management',
    char2: 'Workload Protection',
    char3: 'Container Security',
  },
];

const EndPoints = () => {
  return (
    <div className='w-full font-manrope text-sm flex justify-center items-center text-center flex-col mt-16'>
      <div className='flex flex-col justify-around'>
        <div className='pb-3 text-2xl font-semibold'>
          <h1>Endpoint & Cloud Workload Protection</h1>
        </div>
        <h2>
          Wazuh unifies historically separate functions into a single agent and
          platform architecture.
        </h2>
        <h2>
          Protection is provided for public clouds, private clouds, and
          on-premise data centers.
        </h2>
      </div>
      <div className='mx-8 flex-col sm:flex-row flex gap-10 mt-8 mb-16'>
        {DataEndPoints.map((data) => (
          <SingleEndPoint
            image={data.image}
            title={data.title}
            char1={data.char1}
            char2={data.char2}
            char3={data.char3}
          />
        ))}
      </div>
    </div>
  );
};

export default EndPoints;
