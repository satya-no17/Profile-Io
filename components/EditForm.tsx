"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { updateProfile } from "@/actions/updateData";

export default function EditProfileForm({ data }: any) {
  const [mode, setMode] = useState<"profile" | "links">("profile");
  const [fullname, setFullname] = useState(data.fullname);
  const [username, setUsername] = useState(data.username);
  const [bio, setBio] = useState(data.bio);
  const [description, setDescription] = useState(data.description);
  const [links, setLinks] = useState(data.links || []);
  const [avatarPreview, setAvatarPreview] = useState(data.avatar);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const updateLink = (index: number, field: string, value: string) => {
    const updated = [...links];
    updated[index][field] = value;
    setLinks(updated);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_: any, i: number) => i !== index));
  };

  const addLink = () => {
    setLinks([...links, { title: "", url: "", icon: "🔗" }]);
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append("fullname", fullname || "");
      formData.append("username", username || "");
      formData.append("bio", bio || "");
      formData.append("description", description || "");
      formData.append("links", JSON.stringify(links));
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }
      await updateProfile(formData);
      alert("Profile saved!");
    } catch (err) {
      alert("Error saving profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-6">
      <div className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-emerald-400 to-blue-500">
        <div className="flex flex-col lg:flex-row bg-[#0a0b10] h-full rounded-2xl p-4 sm:p-6 gap-6 overflow-auto">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/2 p-4 sm:p-6">

            {/* Toggle */}
            <div className="flex gap-2 mb-4">
              <button type="button" onClick={() => setMode("profile")}
                className={`px-4 py-2 rounded-xl ${mode === "profile" ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white" : "bg-[#151822] text-gray-400"}`}>
                Profile
              </button>
              <button type="button" onClick={() => setMode("links")}
                className={`px-4 py-2 rounded-xl ${mode === "links" ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white" : "bg-[#151822] text-gray-400"}`}>
                Links
              </button>
            </div>

            {/* Avatar */}
            <div
              className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 blur-md opacity-40"></div>
              <Image
                src={avatarPreview || "/default-avatar.png"}
                alt="avatar"
                fill
                className="rounded-full object-cover z-10"
              />
              <div className="absolute inset-0 rounded-full bg-black/60 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-sm font-medium">📷 Change</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Click avatar to change photo</p>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />

            {/* Profile Inputs */}
            <div className="mt-4 w-full max-w-md space-y-3">
              <input value={fullname || ""} onChange={(e) => setFullname(e.target.value)}
                disabled={mode !== "profile"} placeholder="Full name"
                className={`w-full text-center text-2xl bg-transparent border-b border-white/10 text-white ${mode !== "profile" && "opacity-50"}`} />

              <input value={username || ""} onChange={(e) => setUsername(e.target.value)}
                disabled={mode !== "profile"} placeholder="Username"
                className={`w-full text-center text-gray-400 bg-transparent border-b border-white/10 ${mode !== "profile" && "opacity-50"}`} />

              <textarea value={bio || ""} onChange={(e) => setBio(e.target.value)}
                disabled={mode !== "profile"} placeholder="Bio"
                className={`w-full bg-transparent border border-white/10 rounded-xl p-2 text-white ${mode !== "profile" && "opacity-50"}`} />

              <textarea value={description || ""} onChange={(e) => setDescription(e.target.value)}
                disabled={mode !== "profile"} placeholder="Description"
                className={`w-full rounded-3xl p-4 bg-[#0f1117] text-white border border-white/10 ${mode !== "profile" && "opacity-50"}`} />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:scale-105 transition disabled:opacity-50"
              >
                {saving ? "Saving..." : "💾 Save Changes"}
              </button>
            </div>
          </div>

          {/* RIGHT - LINKS */}
          <div className="w-full lg:w-1/2 max-w-4xl bg-[#0f1117] rounded-3xl p-4 sm:p-6 border border-white/5">
            <div className="grid gap-3">
              {links.map((link: any, i: number) => (
                <div key={i} className="flex gap-2 items-center">
                  <input value={link.title} disabled={mode !== "links"}
                    onChange={(e) => updateLink(i, "title", e.target.value)}
                    className="flex-1 bg-[#151822] border border-white/10 rounded-lg p-2 text-white" />
                  <input value={link.url} disabled={mode !== "links"}
                    onChange={(e) => updateLink(i, "url", e.target.value)}
                    className="flex-1 bg-[#151822] border border-white/10 rounded-lg p-2 text-white" />
                  {mode === "links" && (
                    <button type="button" onClick={() => removeLink(i)} className="text-red-400">❌</button>
                  )}
                </div>
              ))}
              {mode === "links" && (
                <button type="button" onClick={addLink}
                  className="mt-4 w-full py-2 rounded-xl bg-[#151822] text-white">
                  ➕ Add Link
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}