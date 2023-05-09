// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
        <>
            <div className="w-full mx-auto h-full flex flex-col gap-4 rounded shadow bg-slate-200 p-10">
                {children}
            </div>
        </>
    );
};

export default Container;