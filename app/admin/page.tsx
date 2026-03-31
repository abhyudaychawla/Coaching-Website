import type { Metadata } from "next";
import { type ContactMessageRecord, getAdminInboxData, type LeadRecord } from "@/lib/inbox-store";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

const statusColors: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  pending: "bg-yellow-50 text-yellow-700",
  contacted: "bg-green-50 text-green-700",
  booked: "bg-purple-50 text-purple-700",
  unread: "bg-orange-50 text-orange-700",
  read: "bg-gray-50 text-gray-600",
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const adminToken = cookieStore.get("admin_token");
  if (adminToken?.value !== process.env.ADMIN_SECRET) {
    redirect("/admin/login");
  }

  const { leads, messages, error, storage } = await getAdminInboxData();

  return (
    <div className="min-h-screen bg-gray-50 px-6 pb-16 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-1 font-heading text-3xl text-navy">Admin Dashboard</h1>
          <p className="text-sm text-navy/50">Change & Clarity Coaching</p>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {storage === "file" && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
            New submissions are being saved locally in <code>data/inbox.json</code>.
          </div>
        )}

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Total Leads", value: leads.length },
            { label: "New Leads", value: leads.filter((lead) => lead.status === "new").length },
            { label: "Messages", value: messages.length },
            { label: "Unread", value: messages.filter((message) => message.status === "unread").length },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="mb-1 font-heading text-2xl text-navy">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="font-heading text-xl text-navy">Consultation Requests & Leads</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/50">
                  {["Name", "Email", "Phone", "Interest", "Contact Via", "Status", "Date"].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-400">
                      No leads yet
                    </td>
                  </tr>
                )}
                {(leads as LeadRecord[]).map((lead) => (
                  <tr key={lead.id} className="transition-colors hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{lead.fullName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{lead.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{lead.phone || "-"}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{lead.serviceInterest}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{lead.preferredContactMethod}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          statusColors[lead.status] || "bg-gray-50 text-gray-500"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-400">
                      {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="font-heading text-xl text-navy">Contact Messages</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/50">
                  {["Name", "Email", "Subject", "Message", "Status", "Date"].map((heading) => (
                    <th
                      key={heading}
                      className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">
                      No messages yet
                    </td>
                  </tr>
                )}
                {(messages as ContactMessageRecord[]).map((message) => (
                  <tr key={message.id} className="transition-colors hover:bg-gray-50/50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{message.fullName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{message.email}</td>
                    <td className="max-w-[160px] truncate px-4 py-3 text-sm text-gray-600">{message.subject}</td>
                    <td className="max-w-[200px] truncate px-4 py-3 text-sm text-gray-500">{message.message}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          statusColors[message.status] || "bg-gray-50 text-gray-500"
                        }`}
                      >
                        {message.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-400">
                      {new Date(message.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
