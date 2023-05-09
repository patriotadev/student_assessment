/* eslint-disable react/prop-types */
const Button = ({handleSubmit}) => {
    return (
        <div onClick={handleSubmit} className="w-[80px] h-[40px] bg-slate-800 rounded flex justify-center items-center text-white cursor-pointer">
            Simpan
        </div>
    );
};

export default Button;