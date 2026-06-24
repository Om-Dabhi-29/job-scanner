function RedFlagCard() {
  return (
    <div
      style={{
        
        background: "white",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>Detected Red Flags</h3>

      <ul style={{ textAlign: "left" }}>
        <li>Unrealistic Salary</li>
        <li>Urgent Hiring Language</li>
        <li>Suspicious Email Address</li>
        <li>Advance Payment Request</li>
      </ul>
    </div>
  );
}

export default RedFlagCard;