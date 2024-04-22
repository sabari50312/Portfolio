import "./ProgressBar.css";
function ProgressBar({ width }) {
  return (
    <div class="skills-progress-box">
      <div class="skills-progress" style={`width:${width}%`}></div>
    </div>
  );
}
export default ProgressBar;
