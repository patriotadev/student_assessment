/* eslint-disable react/prop-types */
import { useState } from 'react';
import Avatar from '../assets/images/user.png'

const Card = ({student, handleGradeChange}) => {
    const [selectValue] = useState([
        {
            value: '',
            label: 'Pilih',
        },
        {
            value: '',
            label: 'Pilih',
        },
        {
            value: '',
            label: 'Pilih',
        },
        {
            value: '',
            label: 'Pilih',
        }
    ]);

    const [optionValue] = useState([
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 9,
            label: '9',
        },
        {
            value: 10,
            label: '10',
        },
    ])

    return (
        <>
          <div className="w-50 overflow-x-auto h-[100px] py-2 md:h-[60px] flex flex-col md:flex-row justify-between px-5 rounded shadow-md bg-white">
            <div className='flex gap-5'>
                <div className='flex justify-center items-center'>
                    <img src={Avatar} alt="Profile picture" width='35' />
                </div>
                <div className='flex justify-center items-center'>
                    <p>{student.name}</p>
                </div>
            </div>
            <div className='flex gap-2 md:justify-center mb-2 md:mb-0 items-center'>
                {selectValue.length > 0 && selectValue.map((item, index) => (
                    <select key={index} onChange={(e) => handleGradeChange(student.id, Number(e.target.value), index + 1)} className='w-[100px] border rounded'>
                        <option key={index} value={item.value}>{item.label}</option>
                        {optionValue.length > 0 && optionValue.map((option, idx) => (
                            <option key={idx} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                ))}
            </div>
          </div>
        </>
    );
};

export default Card;