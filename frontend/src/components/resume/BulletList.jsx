// src/components/resume/BulletList.jsx

export default function BulletList({ bullets }) {
  return (
    <ul>
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}
