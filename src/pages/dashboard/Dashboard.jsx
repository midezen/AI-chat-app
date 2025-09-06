import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>MIDZEN AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="chat" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="chat" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="chat" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
