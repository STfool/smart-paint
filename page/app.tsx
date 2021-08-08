import * as React from "react";

const App: React.FC = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img src="" alt="ChitChat Logo" className="h-12 w-12" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You are a new message</p>
            </div>
        </div>
    );
};

export default App;
