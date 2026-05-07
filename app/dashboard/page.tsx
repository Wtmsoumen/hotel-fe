"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  CalendarCheck,
  Heart,
  Settings,
  Bell,
  LogOut,
  MapPin,
  ChevronRight,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Menu,
  X,
  Award,
  Bed,
  Download,
  Trash2,
  Eye,
  User,
  Phone,
  Mail,
  Lock,
  Tag,
  Filter,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Info,
  BellOff,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: CalendarCheck, label: "My Bookings", id: "bookings" },
  { icon: Heart, label: "Saved Hotels", id: "saved" },
  { icon: Bell, label: "Notifications", id: "notifications", badge: 3 },
  { icon: Settings, label: "Profile Settings", id: "settings" },
];

const stats = [
  { label: "Total Bookings", value: "12", icon: CalendarCheck, color: "#D8A95B", bg: "#FFF6E8" },
  { label: "Upcoming Stays", value: "3", icon: Bed, color: "#152844", bg: "#EEF2F7" },
  { label: "Saved Hotels", value: "8", icon: Heart, color: "#D8A95B", bg: "#FFF6E8" },
  { label: "Loyalty Points", value: "2,450", icon: Award, color: "#152844", bg: "#EEF2F7" },
];

const allBookings = [
  { id: 1, hotel: "The Grand Palace", location: "Mumbai, India", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=240&fit=crop", checkIn: "12 May 2026", checkOut: "15 May 2026", nights: 3, room: "Deluxe Suite", price: "₹18,500", status: "confirmed" },
  { id: 2, hotel: "Sunset Cove Resort", location: "Goa, India", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=240&fit=crop", checkIn: "22 May 2026", checkOut: "25 May 2026", nights: 3, room: "Ocean View Room", price: "₹12,000", status: "pending" },
  { id: 3, hotel: "Mountain Retreat", location: "Manali, India", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=240&fit=crop", checkIn: "5 Jun 2026", checkOut: "8 Jun 2026", nights: 3, room: "Luxury Cottage", price: "₹9,800", status: "confirmed" },
  { id: 4, hotel: "The Leela Palace", location: "Delhi, India", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=240&fit=crop", checkIn: "10 Jan 2026", checkOut: "13 Jan 2026", nights: 3, room: "Royal Suite", price: "₹42,000", status: "completed" },
  { id: 5, hotel: "Rambagh Palace", location: "Jaipur, India", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=240&fit=crop", checkIn: "20 Feb 2026", checkOut: "22 Feb 2026", nights: 2, room: "Heritage Room", price: "₹22,000", status: "completed" },
  { id: 6, hotel: "Backwater Bliss", location: "Kerala, India", image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=400&h=240&fit=crop", checkIn: "5 Mar 2026", checkOut: "7 Mar 2026", nights: 2, room: "Houseboat Suite", price: "₹8,500", status: "cancelled" },
];

const savedHotelsData = [
  { id: 1, name: "The Oberoi Amarvilas", location: "Agra, India", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=280&fit=crop", rating: 4.9, reviews: 512, price: "₹32,000", tag: "Luxury" },
  { id: 2, name: "Taj Lake Palace", location: "Udaipur, India", image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=400&h=280&fit=crop", rating: 4.8, reviews: 389, price: "₹28,500", tag: "Heritage" },
  { id: 3, name: "Wildflower Hall", location: "Shimla, India", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=280&fit=crop", rating: 4.7, reviews: 214, price: "₹15,000", tag: "Nature" },
  { id: 4, name: "Rambagh Palace", location: "Jaipur, India", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=280&fit=crop", rating: 4.9, reviews: 678, price: "₹38,000", tag: "Palace" },
  { id: 5, name: "Backwater Bliss Resort", location: "Kerala, India", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop", rating: 4.6, reviews: 143, price: "₹11,000", tag: "Nature" },
  { id: 6, name: "The Leela Kovalam", location: "Thiruvananthapuram, India", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=280&fit=crop", rating: 4.7, reviews: 301, price: "₹19,500", tag: "Beach" },
];

const notificationsData = [
  { id: 1, type: "booking", icon: CheckCircle2, color: "#22c55e", title: "Booking Confirmed", body: "Your booking at The Grand Palace (12–15 May) is confirmed. Enjoy your stay!", time: "2 hours ago", read: false },
  { id: 2, type: "offer", icon: Sparkles, color: "#D8A95B", title: "Exclusive Offer for You", body: "Get 20% off on your next stay at any partner hotel. Valid till 31 May 2026.", time: "5 hours ago", read: false },
  { id: 3, type: "booking", icon: AlertCircle, color: "#f59e0b", title: "Payment Pending", body: "Complete your payment for Sunset Cove Resort to secure your reservation.", time: "Yesterday", read: false },
  { id: 4, type: "system", icon: ShieldCheck, color: "#152844", title: "Account Verified", body: "Your email address johndoe@example.com has been verified successfully.", time: "2 days ago", read: true },
  { id: 5, type: "offer", icon: Tag, color: "#D8A95B", title: "Weekend Flash Sale", body: "Up to 35% off on select mountain retreats. Book before Friday!", time: "3 days ago", read: true },
  { id: 6, type: "booking", icon: Star, color: "#D8A95B", title: "How was your stay?", body: "You stayed at The Leela Palace in January. Share your experience!", time: "5 days ago", read: true },
  { id: 7, type: "system", icon: TrendingUp, color: "#152844", title: "Loyalty Points Added", body: "250 points have been added to your account. You now have 2,450 pts.", time: "1 week ago", read: true },
  { id: 8, type: "system", icon: Info, color: "#6b7280", title: "Policy Update", body: "Our cancellation policy has been updated. Please review the changes.", time: "2 weeks ago", read: true },
];

const activity = [
  { icon: CheckCircle2, color: "#22c55e", text: "Booking confirmed for The Grand Palace", time: "2 hours ago" },
  { icon: Heart, color: "#D8A95B", text: "You saved Wildflower Hall to favourites", time: "Yesterday" },
  { icon: AlertCircle, color: "#f59e0b", text: "Payment pending for Sunset Cove Resort", time: "2 days ago" },
  { icon: Star, color: "#D8A95B", text: "You reviewed The Leela Palace — 5 stars", time: "5 days ago" },
  { icon: TrendingUp, color: "#152844", text: "Loyalty points updated: +250 pts", time: "1 week ago" },
];

// ─── Status badge helper ──────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; cls: string }> = {
    confirmed: { label: "Confirmed", cls: "bg-green-100 text-green-700" },
    pending: { label: "Pending", cls: "bg-amber-100 text-amber-700" },
    completed: { label: "Completed", cls: "bg-blue-100 text-blue-700" },
    cancelled: { label: "Cancelled", cls: "bg-red-100 text-red-600" },
  };
  const { label, cls } = map[status] ?? { label: status, cls: "bg-gray-100 text-gray-600" };
  return <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${cls}`}>{label}</span>;
}

// ─── Section views ────────────────────────────────────────────────────────────

function DashboardView({ setActiveNav }: { setActiveNav: (id: string) => void }) {
  const [savedIds, setSavedIds] = useState<number[]>([1, 2, 3]);
  const toggleSaved = (id: number) =>
    setSavedIds((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);

  const upcoming = allBookings.filter((b) => b.status === "confirmed" || b.status === "pending").slice(0, 3);
  const saved = savedHotelsData.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm card-hover">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: bg }}>
              <Icon className="w-5 h-5" style={{ color }} />
            </div>
            <p className="text-2xl font-semibold text-[#1a2332]">{value}</p>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Upcoming Bookings */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="section-tag" style={{ fontSize: 12 }}>Your Trips</span>
            <h2 className="text-lg font-semibold text-[#1a2332]">Upcoming Bookings</h2>
          </div>
          <button onClick={() => setActiveNav("bookings")} className="text-xs font-medium text-[#D8A95B] hover:underline flex items-center gap-1">
            View all <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {upcoming.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover">
              <div className="relative h-40">
                <Image src={b.image} alt={b.hotel} fill className="object-cover" unoptimized />
                <span className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${b.status === "confirmed" ? "bg-green-500/90 text-white" : "bg-amber-400/90 text-white"}`}>
                  {b.status === "confirmed" ? "Confirmed" : "Pending"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#1a2332] text-sm truncate">{b.hotel}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                  <MapPin className="w-3 h-3 shrink-0" />{b.location}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#F7F8FC] rounded-lg px-2.5 py-2">
                    <p className="text-gray-400 mb-0.5">Check-in</p>
                    <p className="font-medium text-[#1a2332]">{b.checkIn}</p>
                  </div>
                  <div className="bg-[#F7F8FC] rounded-lg px-2.5 py-2">
                    <p className="text-gray-400 mb-0.5">Check-out</p>
                    <p className="font-medium text-[#1a2332]">{b.checkOut}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{b.room} · {b.nights} nights</p>
                    <p className="font-semibold text-[#D8A95B] text-sm">{b.price}</p>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-full border border-[#D8A95B] text-[#D8A95B] hover:bg-[#D8A95B] hover:text-white transition-colors font-medium">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Saved Hotels */}
        <section className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="section-tag" style={{ fontSize: 12 }}>Wishlist</span>
              <h2 className="text-lg font-semibold text-[#1a2332]">Saved Hotels</h2>
            </div>
            <button onClick={() => setActiveNav("saved")} className="text-xs font-medium text-[#D8A95B] hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {saved.map((h) => (
              <div key={h.id} className="bg-white rounded-2xl p-3 flex gap-4 shadow-sm card-hover">
                <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image src={h.image} alt={h.name} fill className="object-cover" unoptimized />
                  <span className="absolute top-1.5 left-1.5 bg-[#D8A95B] text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full">{h.tag}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-[#1a2332] text-sm truncate">{h.name}</h3>
                      <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                        <MapPin className="w-3 h-3 shrink-0" />{h.location}
                      </div>
                    </div>
                    <button onClick={() => toggleSaved(h.id)} className="shrink-0 p-1.5 rounded-full hover:bg-[#FFF6E8] transition-colors">
                      <Heart className="w-4 h-4" style={{ color: savedIds.includes(h.id) ? "#D8A95B" : "#9ca3af", fill: savedIds.includes(h.id) ? "#D8A95B" : "none" }} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#D8A95B] text-[#D8A95B]" />
                      <span className="text-xs font-medium text-[#1a2332]">{h.rating}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-[#D8A95B]">{h.price}</span>
                      <span className="text-xs text-gray-400"> /night</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity + Loyalty */}
        <section>
          <div className="mb-4">
            <span className="section-tag" style={{ fontSize: 12 }}>Timeline</span>
            <h2 className="text-lg font-semibold text-[#1a2332]">Recent Activity</h2>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
            {activity.map(({ icon: Icon, color, text, time }, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${color}18` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#1a2332] leading-snug">{text}</p>
                  <div className="flex items-center gap-1 mt-1 text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span className="text-[11px]">{time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl p-4 text-white" style={{ background: "linear-gradient(135deg, #152844 0%, #1e3a5f 100%)" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-white/60 uppercase tracking-widest">Loyalty Status</p>
              <Award className="w-4 h-4 text-[#D8A95B]" />
            </div>
            <p className="text-2xl font-semibold">2,450 <span className="text-sm font-normal text-white/60">pts</span></p>
            <p className="text-xs text-white/60 mt-1">550 pts away from Gold tier</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: "81.8%", background: "#D8A95B" }} />
            </div>
            <div className="flex justify-between text-[10px] text-white/40 mt-1.5">
              <span>Silver</span>
              <span>Gold at 3,000 pts</span>
            </div>
          </div>
        </section>
      </div>

      <div className="h-4" />
    </div>
  );
}

function BookingsView() {
  const tabs = ["All", "Upcoming", "Completed", "Cancelled"];
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allBookings
    : activeTab === "Upcoming"
      ? allBookings.filter((b) => b.status === "confirmed" || b.status === "pending")
      : activeTab === "Completed"
        ? allBookings.filter((b) => b.status === "completed")
        : allBookings.filter((b) => b.status === "cancelled");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="section-tag" style={{ fontSize: 12 }}>History</span>
          <h2 className="text-lg font-semibold text-[#1a2332]">My Bookings</h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100 w-fit">
          <Filter className="w-3.5 h-3.5" />
          Filter by date
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm w-fit flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === tab ? "bg-[#D8A95B] text-white shadow-sm" : "text-gray-500 hover:text-[#1a2332]"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Booking cards */}
      <div className="space-y-4">
        {filtered.map((b) => (
          <div key={b.id} className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row card-hover">
            <div className="relative sm:w-48 h-40 sm:h-auto shrink-0">
              <Image src={b.image} alt={b.hotel} fill className="object-cover" unoptimized />
            </div>
            <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-[#1a2332] text-sm">{b.hotel}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 shrink-0" />{b.location}
                  </div>
                </div>
                <StatusBadge status={b.status} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { label: "Check-in", val: b.checkIn },
                  { label: "Check-out", val: b.checkOut },
                  { label: "Room", val: b.room },
                  { label: "Duration", val: `${b.nights} nights` },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-[#F7F8FC] rounded-lg px-3 py-2">
                    <p className="text-gray-400 mb-0.5">{label}</p>
                    <p className="font-medium text-[#1a2332] truncate">{val}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-gray-100">
                <p className="font-semibold text-[#D8A95B]">{b.price} <span className="text-xs text-gray-400 font-normal">total</span></p>
                <div className="flex gap-2">
                  {b.status === "completed" && (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#D8A95B] hover:text-[#D8A95B] transition-colors">
                      <Download className="w-3 h-3" /> Invoice
                    </button>
                  )}
                  {(b.status === "confirmed" || b.status === "pending") && (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-200 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors">
                      <Trash2 className="w-3 h-3" /> Cancel
                    </button>
                  )}
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-amber text-xs font-medium text-white">
                    <Eye className="w-3 h-3" /> View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
            <CalendarCheck className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No bookings in this category</p>
          </div>
        )}
      </div>
      <div className="h-4" />
    </div>
  );
}

function SavedView() {
  const [savedIds, setSavedIds] = useState<number[]>(savedHotelsData.map((h) => h.id));
  const toggleSaved = (id: number) =>
    setSavedIds((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  const visible = savedHotelsData.filter((h) => savedIds.includes(h.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="section-tag" style={{ fontSize: 12 }}>Wishlist</span>
          <h2 className="text-lg font-semibold text-[#1a2332]">Saved Hotels</h2>
        </div>
        <span className="text-xs text-gray-400">{visible.length} saved</span>
      </div>

      {visible.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 shadow-sm text-center">
          <Heart className="w-10 h-10 text-gray-200 mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-400">No saved hotels yet</p>
          <Link href="/listing" className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-[#D8A95B] hover:underline">
            Explore Hotels <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {visible.map((h) => (
            <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover flex flex-col">
              <div className="relative h-48">
                <Image src={h.image} alt={h.name} fill className="object-cover" unoptimized />
                <span className="absolute top-3 left-3 bg-[#D8A95B] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {h.tag}
                </span>
                <button
                  onClick={() => toggleSaved(h.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
                >
                  <Heart className="w-4 h-4" style={{ color: "#D8A95B", fill: "#D8A95B" }} />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-[#1a2332] text-sm">{h.name}</h3>
                <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5 mb-3">
                  <MapPin className="w-3 h-3 shrink-0" />{h.location}
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(h.rating) ? "fill-[#D8A95B] text-[#D8A95B]" : "text-gray-200 fill-gray-200"}`} />
                  ))}
                  <span className="text-xs font-medium text-[#1a2332] ml-1">{h.rating}</span>
                  <span className="text-xs text-gray-400">({h.reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-base font-bold text-[#D8A95B]">{h.price}</span>
                    <span className="text-xs text-gray-400"> /night</span>
                  </div>
                  <Link href="/listing" className="text-xs px-4 py-1.5 rounded-full btn-amber text-white font-medium">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="h-4" />
    </div>
  );
}

function NotificationsView() {
  const [notifications, setNotifications] = useState(notificationsData);
  const tabs = ["All", "Bookings", "Offers", "System"];
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? notifications
    : notifications.filter((n) => n.type === activeTab.toLowerCase());

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id: number) =>
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));

  const dismiss = (id: number) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="section-tag" style={{ fontSize: 12 }}>Inbox</span>
          <h2 className="text-lg font-semibold text-[#1a2332]">
            Notifications
            {unreadCount > 0 && (
              <span className="ml-2 text-xs font-semibold bg-[#D8A95B] text-white px-2 py-0.5 rounded-full align-middle">
                {unreadCount} new
              </span>
            )}
          </h2>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="text-xs font-medium text-[#D8A95B] hover:underline flex items-center gap-1 w-fit">
            <CheckCircle2 className="w-3.5 h-3.5" /> Mark all as read
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm w-fit flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === tab ? "bg-[#D8A95B] text-white shadow-sm" : "text-gray-500 hover:text-[#1a2332]"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 shadow-sm text-center">
            <BellOff className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-400">No notifications here</p>
          </div>
        ) : (
          filtered.map((n) => (
            <div
              key={n.id}
              onClick={() => markRead(n.id)}
              className={`bg-white rounded-2xl p-4 shadow-sm flex gap-4 cursor-pointer transition-all hover:shadow-md ${!n.read ? "border-l-4 border-[#D8A95B]" : ""}`}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${n.color}18` }}>
                <n.icon className="w-5 h-5" style={{ color: n.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className={`text-sm leading-snug ${!n.read ? "font-semibold text-[#1a2332]" : "font-medium text-gray-600"}`}>
                    {n.title}
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); dismiss(n.id); }}
                    className="shrink-0 p-1 rounded-full text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{n.body}</p>
                <div className="flex items-center gap-1.5 mt-2 text-gray-300">
                  <Clock className="w-3 h-3" />
                  <span className="text-[11px]">{n.time}</span>
                  {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-[#D8A95B] ml-1" />}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="h-4" />
    </div>
  );
}

function ProfileView() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "+91 98765 43210",
    dob: "1992-06-15",
    gender: "Male",
    city: "Mumbai",
    country: "India",
  });
  const [passwords, setPasswords] = useState({ current: "", newPass: "", confirm: "" });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-full">
      <div>
        <span className="section-tag" style={{ fontSize: 12 }}>Account</span>
        <h2 className="text-lg font-semibold text-[#1a2332]">Profile Settings</h2>
      </div>

      {/* Avatar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#D8A95B] flex items-center justify-center text-white text-xl font-bold shrink-0">
          JD
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a2332]">John Doe</p>
          <p className="text-xs text-gray-400 mt-0.5">johndoe@example.com</p>
          <button className="mt-2 text-xs font-medium text-[#D8A95B] hover:underline">Change Photo</button>
        </div>
        <div className="ml-auto hidden sm:block text-right">
          <div className="flex items-center gap-1.5 justify-end">
            <Award className="w-4 h-4 text-[#D8A95B]" />
            <span className="text-xs font-semibold text-[#1a2332]">Silver Member</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">2,450 loyalty points</p>
        </div>
      </div>

      {/* Personal Info */}
      <form onSubmit={handleSave} className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
        <div className="flex items-center gap-2 mb-1">
          <User className="w-4 h-4 text-[#D8A95B]" />
          <h3 className="text-sm font-semibold text-[#1a2332]">Personal Information</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { label: "First Name", key: "firstName" },
            { label: "Last Name", key: "lastName" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
              <input
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full border-b border-gray-200 pb-2 text-sm text-[#1a2332] outline-none focus:border-[#D8A95B] transition-colors bg-transparent"
              />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Email Address</label>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="flex-1 text-sm text-[#1a2332] outline-none bg-transparent"
              />
              <Mail className="w-4 h-4 text-gray-300 shrink-0" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Phone Number</label>
            <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="flex-1 text-sm text-[#1a2332] outline-none bg-transparent"
              />
              <Phone className="w-4 h-4 text-gray-300 shrink-0" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Date of Birth</label>
            <input
              type="date"
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
              className="w-full border-b border-gray-200 pb-2 text-sm text-[#1a2332] outline-none focus:border-[#D8A95B] transition-colors bg-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Gender</label>
            <select
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className="w-full border-b border-gray-200 pb-2 text-sm text-[#1a2332] outline-none bg-transparent focus:border-[#D8A95B] transition-colors"
            >
              {["Male", "Female", "Non-binary", "Prefer not to say"].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">City</label>
            <input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full border-b border-gray-200 pb-2 text-sm text-[#1a2332] outline-none focus:border-[#D8A95B] transition-colors bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className={`text-xs font-medium transition-opacity ${saved ? "text-green-500 opacity-100" : "opacity-0"}`}>
            ✓ Changes saved successfully
          </p>
          <button type="submit" className="px-6 py-2 rounded-full btn-amber text-sm text-white font-medium">
            Save Changes
          </button>
        </div>
      </form>

      {/* Change Password */}
      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-[#D8A95B]" />
          <h3 className="text-sm font-semibold text-[#1a2332]">Change Password</h3>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { label: "Current Password", key: "current" },
            { label: "New Password", key: "newPass" },
            { label: "Confirm Password", key: "confirm" },
          ].map(({ label, key }) => (
            <div key={key}>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
              <input
                type="password"
                placeholder="••••••••"
                value={passwords[key as keyof typeof passwords]}
                onChange={(e) => setPasswords({ ...passwords, [key]: e.target.value })}
                className="w-full border-b border-gray-200 pb-2 text-sm text-[#1a2332] outline-none focus:border-[#D8A95B] transition-colors bg-transparent"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-1">
          <button className="px-6 py-2 rounded-full border border-[#D8A95B] text-[#D8A95B] text-sm font-medium hover:bg-[#D8A95B] hover:text-white transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Bell className="w-4 h-4 text-[#D8A95B]" />
          <h3 className="text-sm font-semibold text-[#1a2332]">Notification Preferences</h3>
        </div>
        {[
          { label: "Booking confirmations & updates", desc: "Get notified for all booking activity" },
          { label: "Exclusive deals & offers", desc: "Personalised hotel deals and promotions" },
          { label: "Travel tips & recommendations", desc: "Curated guides for your saved destinations" },
        ].map(({ label, desc }) => (
          <label key={label} className="flex items-start justify-between gap-4 cursor-pointer">
            <div>
              <p className="text-sm font-medium text-[#1a2332]">{label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
            </div>
            <div className="relative shrink-0 mt-0.5">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 rounded-full bg-gray-200 peer-checked:bg-[#D8A95B] transition-colors" />
              <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-4" />
            </div>
          </label>
        ))}
      </div>

      {/* <div className="h-4" /> */}
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifBadge, setNotifBadge] = useState(3);

  const handleNav = (id: string) => {
    setActiveNav(id);
    setSidebarOpen(false);
    if (id === "notifications") setNotifBadge(0);
  };

  const navItemsWithBadge = navItems.map((n) =>
    n.id === "notifications" ? { ...n, badge: notifBadge || undefined } : n
  );

  const renderContent = () => {
    switch (activeNav) {
      case "bookings": return <BookingsView />;
      case "saved": return <SavedView />;
      case "notifications": return <NotificationsView />;
      case "settings": return <ProfileView />;
      default: return <DashboardView setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F7F8FC] overflow-hidden">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#16191C] flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="Stayent" width={140} height={40} className="h-auto w-[130px] object-contain" />
          </Link>
          <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D8A95B] flex items-center justify-center text-white font-semibold text-sm shrink-0">JD</div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">John Doe</p>
              <p className="text-white/50 text-xs truncate">johndoe@example.com</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
          {navItemsWithBadge.map(({ icon: Icon, label, id, badge }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeNav === id ? "bg-[#D8A95B] text-white" : "text-white/60 hover:text-white hover:bg-white/8"}`}
            >
              <Icon className="w-4.5 h-4.5 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {badge !== undefined && badge > 0 && (
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-semibold leading-none ${activeNav === id ? "bg-white/30 text-white" : "bg-[#D8A95B] text-white"}`}>{badge}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="px-4 pb-6 pt-2 border-t border-white/10 mt-auto">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/8 transition-all">
            <LogOut className="w-4.5 h-4.5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-[#1a2332] p-1" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base font-semibold text-[#1a2332]">
                {navItems.find((n) => n.id === activeNav)?.label ?? "Dashboard"}
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Welcome back, John!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/listing" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white btn-amber">
              Book a Hotel <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => handleNav("notifications")}
              className="relative p-2 rounded-full bg-[#FFF6E8] text-[#D8A95B] hover:bg-[#D8A95B] hover:text-white transition-colors"
            >
              <Bell className="w-4.5 h-4.5" />
              {notifBadge > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />}
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
