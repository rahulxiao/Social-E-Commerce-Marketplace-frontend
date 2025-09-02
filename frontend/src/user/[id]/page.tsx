import Link from "next/link";

export default function UserPage() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Total User</h1>
          <Link href="/user/1" className="auth-link">
            View Profile
          </Link>
          <Link href="/user/2" className="auth-link">
            View Profile
          </Link>
          <Link href="/user/3" className="auth-link">
            View Profile
          </Link>
          <Link href="/user/4" className="auth-link">
            View Profile
          </Link>
          <Link href="/user/5" className="auth-link">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}