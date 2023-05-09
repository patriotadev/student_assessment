const ContainerLabel = () => {
    return (
        <div className='w-50 overflow-x-auto h-[100px] py-2 md:h-[60px] flex flex-col md:flex-row justify-end px-5'>
            <div className='flex text-sm font-semibold gap-12 md:justify-center mb-2 md:mb-0 items-center'>
                <span className='text-center'>Aspek <br/> penilaian 1</span>
                <span className='text-center'>Aspek <br/> penilaian 2</span>
                <span className='text-center'>Aspek <br/> penilaian 3</span>
                <span className='text-center'>Aspek <br/> penilaian 4</span>
            </div>
        </div>
    );
};

export default ContainerLabel;