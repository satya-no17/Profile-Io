"use client";

import Image from "next/image";
import { useState } from "react";
import { updateProfile } from "@/actions/updateData";

export default function EditProfileForm({ data }: any) {
  const [mode, setMode] = useState<"profile" | "links">("profile");

  const [fullname, setFullname] = useState(data.fullname);
  const [username, setUsername] = useState(data.username);
  const [bio, setBio] = useState(data.bio);
  const [description, setDescription] = useState(data.description);

  const [links, setLinks] = useState(data.links || []);

  // handle link change
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

  return (
    <form action={updateProfile}>
      {/* Hidden links data */}
      <input
        type="hidden"
        name="links"
        value={JSON.stringify(links)}
      />

      <div className="min-h-screen w-full bg-black p-4 sm:p-6">
        <div className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-emerald-400 to-blue-500">

          <div className="flex flex-col lg:flex-row bg-[#0a0b10] h-full rounded-2xl p-4 sm:p-6 gap-6 overflow-auto">

            {/* LEFT */}
            <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/2 p-4 sm:p-6">

              {/* Toggle */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setMode("profile")}
                  className={`px-4 py-2 rounded-xl ${
                    mode === "profile"
                      ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                      : "bg-[#151822] text-gray-400"
                  }`}
                >
                  Profile
                </button>

                <button
                  type="button"
                  onClick={() => setMode("links")}
                  className={`px-4 py-2 rounded-xl ${
                    mode === "links"
                      ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                      : "bg-[#151822] text-gray-400"
                  }`}
                >
                  Links
                </button>
              </div>

              {/* Avatar */}
              <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-400 blur-md opacity-40"></div>
                <Image
                  src={data.avatar}
                  alt="avatar"
                  fill
                  className="rounded-full object-cover z-10"
                />
              </div>

              {/* Profile Inputs */}
              <div className="mt-4 w-full max-w-md space-y-3">

                <input
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  disabled={mode !== "profile"}
                  className={`w-full text-center text-2xl bg-transparent border-b border-white/10 text-white ${
                    mode !== "profile" && "opacity-50"
                  }`}
                />

                <input
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={mode !== "profile"}
                  className={`w-full text-center text-gray-400 bg-transparent border-b border-white/10 ${
                    mode !== "profile" && "opacity-50"
                  }`}
                />

                <textarea
                  name="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  disabled={mode !== "profile"}
                  className={`w-full bg-transparent border border-white/10 rounded-xl p-2 text-white ${
                    mode !== "profile" && "opacity-50"
                  }`}
                />

                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={mode !== "profile"}
                  className={`w-full rounded-3xl p-4 bg-[#0f1117] text-white border border-white/10 ${
                    mode !== "profile" && "opacity-50"
                  }`}
                />

                <button
                  type="submit"
                  className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:scale-105 transition"
                >
                  💾 Save Changes
                </button>
              </div>
            </div>

            {/* RIGHT - LINKS */}
            <div className="w-full lg:w-1/2 max-w-4xl bg-[#0f1117] rounded-3xl p-4 sm:p-6 border border-white/5">

              <div className="grid gap-3">

                {links.map((link: any, i: number) => (
                  <div key={i} className="flex gap-2 items-center">

                    <input
                      value={link.title}
                      disabled={mode !== "links"}
                      onChange={(e) =>
                        updateLink(i, "title", e.target.value)
                      }
                      className="flex-1 bg-[#151822] border border-white/10 rounded-lg p-2 text-white"
                    />

                    <input
                      value={link.url}
                      disabled={mode !== "links"}
                      onChange={(e) =>
                        updateLink(i, "url", e.target.value)
                      }
                      className="flex-1 bg-[#151822] border border-white/10 rounded-lg p-2 text-white"
                    />

                    {mode === "links" && (
                      <button
                        type="button"
                        onClick={() => removeLink(i)}
                        className="text-red-400"
                      >
                        ❌
                      </button>
                    )}
                  </div>
                ))}

                {mode === "links" && (
                  <button
                    type="button"
                    onClick={addLink}
                    className="mt-4 w-full py-2 rounded-xl bg-[#151822] text-white"
                  >
                    ➕ Add Link
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </form>
  );
}