import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner" />
      <p>Loading repositories...</p>
    </div>
  );
}

export default LoadingSpinner;
