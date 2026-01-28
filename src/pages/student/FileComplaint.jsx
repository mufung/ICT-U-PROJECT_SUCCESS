export default function FileComplaint() {
  return (
    <div className="card">
      <textarea placeholder="Describe the issue"></textarea>
      <input type="file" accept="image/*" />
      <button>Submit Complaint</button>
    </div>
  );
}