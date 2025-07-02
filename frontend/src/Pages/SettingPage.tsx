import { useState } from "react";

const SettingsPage: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save profile logic here
    console.log("Profile saved:", { name, email });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Change password logic here
    console.log("Password changed");
  };

  const handleDeleteAccount = () => {
    // Delete account logic here
    if (confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      console.log("Account deleted");
    }
  };

  return (
    <main className="pt-20 max-w-3xl mx-auto px-4 pb-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Profile Section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Profile Information</h2>
        <form onSubmit={handleProfileSave} className="space-y-4 bg-white p-6 border border-gray-200 rounded shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Save Profile
          </button>
        </form>
      </section>

      {/* Password Section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4 bg-white p-6 border border-gray-200 rounded shadow">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Change Password
          </button>
        </form>
      </section>

      {/* Danger Zone */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Danger Zone</h2>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
        >
          Delete Account
        </button>
      </section>
    </main>
  );
};

export default SettingsPage;
