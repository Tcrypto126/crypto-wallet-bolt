import React, { useState } from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Bell, Shield, User, Globe, Moon, Sun } from 'lucide-react';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Profile Settings</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Display Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                defaultValue="john.doe@example.com"
              />
            </div>
            <Button variant="primary">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                  id="twoFactorAuth"
                />
                <label
                  htmlFor="twoFactorAuth"
                  className={`absolute cursor-pointer rounded-full w-full h-full transition-colors duration-300 ease-in-out ${
                    twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                      twoFactorAuth ? 'transform translate-x-6' : ''
                    }`}
                  />
                </label>
              </div>
            </div>
            <Button variant="outline">Change Password</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive email updates about your account</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                  id="emailNotifications"
                />
                <label
                  htmlFor="emailNotifications"
                  className={`absolute cursor-pointer rounded-full w-full h-full transition-colors duration-300 ease-in-out ${
                    emailNotifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                      emailNotifications ? 'transform translate-x-6' : ''
                    }`}
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Push Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications in your browser</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={pushNotifications}
                  onChange={() => setPushNotifications(!pushNotifications)}
                  id="pushNotifications"
                />
                <label
                  htmlFor="pushNotifications"
                  className={`absolute cursor-pointer rounded-full w-full h-full transition-colors duration-300 ease-in-out ${
                    pushNotifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                      pushNotifications ? 'transform translate-x-6' : ''
                    }`}
                  />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark mode appearance</p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                  id="darkMode"
                />
                <label
                  htmlFor="darkMode"
                  className={`absolute cursor-pointer rounded-full w-full h-full transition-colors duration-300 ease-in-out ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out ${
                      darkMode ? 'transform translate-x-6' : ''
                    }`}
                  >
                    {darkMode ? (
                      <Moon className="w-3 h-3 m-1 text-gray-400" />
                    ) : (
                      <Sun className="w-3 h-3 m-1 text-gray-400" />
                    )}
                  </span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;