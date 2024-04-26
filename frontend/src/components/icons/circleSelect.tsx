export function CircleSelect() {
  return (
    <div className="flex gap-2 px-4 py-6">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="23.5" stroke="#0468C8" />
        <circle cx="24" cy="24" r="12" fill="#0468C8" />
      </svg>
      <div className="block">
        <h5>Алхам 2</h5>
        <h1>Хаягийн мэдээлэл оруулах</h1>
        <h5>Хүлээгдэж байна</h5>
      </div>
    </div>
  );
}
