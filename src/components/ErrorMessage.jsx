import "./ErrorMessage.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <p>⚠️ Something went wrong: {message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="retry-button">
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
