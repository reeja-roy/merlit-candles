import React, { useState } from "react";
import {
  Store,
  User,
  Bell,
  Shield,
  CreditCard,
  Truck,
  Save,
  Mail,
  Phone,
  MapPin,
  Lock,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("store");

  const tabs = [
    {
      id: "store",
      label: "Store",
      icon: Store,
    },
    {
      id: "account",
      label: "Account",
      icon: User,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
    },
    {
      id: "shipping",
      label: "Shipping",
      icon: Truck,
    },
    {
      id: "security",
      label: "Security",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f6f1] p-6">
      {/* Header */}
      <div>
        <p className="text-sm font-medium text-[#a78b6d]">
          Configuration
        </p>

        <h1 className="mt-1 text-2xl font-semibold text-[#292622]">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your store, account, payments and other preferences.
        </p>
      </div>

      {/* Settings Layout */}
      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 rounded-xl border border-[#ebe6de] bg-white p-3 lg:w-64">
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#f5eee5] text-[#8d7255]"
                      : "text-gray-600 hover:bg-[#fcfbf9] hover:text-[#292622]"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1">
          {activeTab === "store" && <StoreSettings />}
          {activeTab === "account" && <AccountSettings />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "payments" && <PaymentSettings />}
          {activeTab === "shipping" && <ShippingSettings />}
          {activeTab === "security" && <SecuritySettings />}
        </main>
      </div>
    </div>
  );
};

/* --------------------------------
   STORE SETTINGS
-------------------------------- */

const StoreSettings = () => {
  return (
    <SettingsCard
      title="Store Information"
      description="Manage the basic information displayed across your store."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="Store Name"
          defaultValue="Merlit Candles"
        />

        <InputField
          label="Store Email"
          type="email"
          defaultValue="hello@merlitcandles.com"
        />

        <InputField
          label="Phone Number"
          defaultValue="+91 98765 43210"
        />

        <InputField
          label="Website"
          defaultValue="www.merlitcandles.com"
        />

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Store Description
          </label>

          <textarea
            rows="4"
            defaultValue="Handcrafted candles made with premium wax, beautiful fragrances and a lot of care."
            className="w-full resize-none rounded-lg border border-gray-200 bg-[#fcfbf9] px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-[#c8aa86]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Store Address
          </label>

          <div className="relative">
            <MapPin
              size={17}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <textarea
              rows="3"
              defaultValue="Trivandrum, Kerala, India"
              className="w-full resize-none rounded-lg border border-gray-200 bg-[#fcfbf9] py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#c8aa86]"
            />
          </div>
        </div>
      </div>

      <SaveButton />
    </SettingsCard>
  );
};

/* --------------------------------
   ACCOUNT SETTINGS
-------------------------------- */

const AccountSettings = () => {
  return (
    <SettingsCard
      title="Account Information"
      description="Manage your administrator account details."
    >
      <div className="flex items-center gap-4 border-b border-[#eee9e2] pb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f5eee5] text-xl font-semibold text-[#8d7255]">
          A
        </div>

        <div>
          <h3 className="font-semibold text-[#292622]">
            Administrator
          </h3>

          <p className="text-sm text-gray-500">
            Store Administrator
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="Full Name"
          defaultValue="Administrator"
          icon={User}
        />

        <InputField
          label="Email Address"
          type="email"
          defaultValue="admin@merlitcandles.com"
          icon={Mail}
        />

        <InputField
          label="Phone Number"
          defaultValue="+91 98765 43210"
          icon={Phone}
        />
      </div>

      <SaveButton />
    </SettingsCard>
  );
};

/* --------------------------------
   NOTIFICATION SETTINGS
-------------------------------- */

const NotificationSettings = () => {
  const notifications = [
    {
      title: "New Orders",
      description: "Receive notifications when a new order is placed.",
    },
    {
      title: "Payment Updates",
      description: "Get notified when payment status changes.",
    },
    {
      title: "Low Stock",
      description: "Receive alerts when products reach low stock.",
    },
    {
      title: "Failed Payments",
      description: "Get notified when a customer payment fails.",
    },
  ];

  return (
    <SettingsCard
      title="Notifications"
      description="Choose which notifications you want to receive."
    >
      <div className="divide-y divide-[#eee9e2]">
        {notifications.map((item, index) => (
          <ToggleRow
            key={item.title}
            title={item.title}
            description={item.description}
            defaultChecked={index !== 3}
          />
        ))}
      </div>

      <SaveButton />
    </SettingsCard>
  );
};

/* --------------------------------
   PAYMENT SETTINGS
-------------------------------- */

const PaymentSettings = () => {
  return (
    <SettingsCard
      title="Payment Methods"
      description="Configure the payment methods available to customers."
    >
      <div className="space-y-4">
        <PaymentMethod
          title="UPI"
          description="Accept payments through UPI apps."
          enabled
        />

        <PaymentMethod
          title="Credit / Debit Card"
          description="Accept Visa, Mastercard and other cards."
          enabled
        />

        <PaymentMethod
          title="Cash on Delivery"
          description="Allow customers to pay when their order arrives."
          enabled
        />

        <PaymentMethod
          title="Net Banking"
          description="Allow customers to pay through internet banking."
          enabled={false}
        />
      </div>

      <SaveButton />
    </SettingsCard>
  );
};

/* --------------------------------
   SHIPPING SETTINGS
-------------------------------- */

const ShippingSettings = () => {
  return (
    <SettingsCard
      title="Shipping Settings"
      description="Configure your store's shipping preferences."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <InputField
          label="Shipping Charge"
          defaultValue="80"
        />

        <InputField
          label="Free Shipping Above"
          defaultValue="999"
        />

        <InputField
          label="Estimated Delivery"
          defaultValue="3 - 7 business days"
        />

        <InputField
          label="Return Window"
          defaultValue="7 days"
        />
      </div>

      <div className="mt-6">
        <ToggleRow
          title="Free Shipping"
          description="Enable free shipping when the order reaches the minimum amount."
          defaultChecked
        />

        <ToggleRow
          title="Allow Returns"
          description="Allow customers to request product returns."
          defaultChecked
        />
      </div>

      <SaveButton />
    </SettingsCard>
  );
};

/* --------------------------------
   SECURITY SETTINGS
-------------------------------- */

const SecuritySettings = () => {
  return (
    <SettingsCard
      title="Security"
      description="Manage your administrator account security."
    >
      <div className="rounded-lg border border-[#ebe6de] bg-[#fcfbf9] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5eee5] text-[#8d7255]">
            <Lock size={18} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#292622]">
              Change Password
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Update your administrator password regularly to keep
              your account secure.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <InputField
            label="Current Password"
            type="password"
          />

          <div />

          <InputField
            label="New Password"
            type="password"
          />

          <InputField
            label="Confirm New Password"
            type="password"
          />
        </div>

        <button className="mt-5 rounded-lg bg-[#292622] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#403b35]">
          Update Password
        </button>
      </div>

      <div className="mt-5">
        <ToggleRow
          title="Two-Factor Authentication"
          description="Add an additional layer of security to your administrator account."
          defaultChecked={false}
        />
      </div>
    </SettingsCard>
  );
};

/* --------------------------------
   REUSABLE COMPONENTS
-------------------------------- */

const SettingsCard = ({ title, description, children }) => {
  return (
    <div className="rounded-xl border border-[#ebe6de] bg-white">
      <div className="border-b border-[#eee9e2] px-6 py-5">
        <h2 className="text-lg font-semibold text-[#292622]">
          {title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
};

const InputField = ({
  label,
  type = "text",
  defaultValue = "",
  icon: Icon,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          type={type}
          defaultValue={defaultValue}
          className={`w-full rounded-lg border border-gray-200 bg-[#fcfbf9] py-2.5 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#c8aa86] ${
            Icon ? "pl-10" : "pl-4"
          }`}
        />
      </div>
    </div>
  );
};

const ToggleRow = ({
  title,
  description,
  defaultChecked = false,
}) => {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
      <div>
        <h3 className="text-sm font-medium text-[#292622]">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-5 w-5 shrink-0 accent-[#8d7255]"
      />
    </label>
  );
};

const PaymentMethod = ({
  title,
  description,
  enabled,
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#ebe6de] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5eee5] text-[#8d7255]">
          <CreditCard size={18} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-[#292622]">
            {title}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {description}
          </p>
        </div>
      </div>

      <input
        type="checkbox"
        defaultChecked={enabled}
        className="h-5 w-5 accent-[#8d7255]"
      />
    </div>
  );
};

const SaveButton = () => {
  return (
    <div className="mt-6 flex justify-end border-t border-[#eee9e2] pt-5">
      <button className="flex items-center gap-2 rounded-lg bg-[#292622] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#403b35]">
        <Save size={17} />
        Save Changes
      </button>
    </div>
  );
};

export default Settings;