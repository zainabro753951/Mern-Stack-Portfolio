import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    tags: { type: [String], default: [] },
    featuredImage: { type: String },
    slug: { type: String, required: true, unique: true },
    metaDescription: { type: String },
    description: { type: String },
    status: {
      type: String,
      enum: ["draft", "published", "pending-review"],
      default: "draft",
    },
    allowComments: { type: Boolean, default: false },
    seoTitle: { type: String },
    seoKeywords: { type: [String], default: [] },
    blogDiscription: { type: String },
    socialMediaSharing: { type: Boolean, default: false },
    readTime: { type: Number },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const BlogViewSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
      required: true,
    }, // ✅ Kis blog ko dekha gaya
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // ✅ Kis user ne dekha
    ipAddress: { type: String }, // ✅ Agar user logged in nahi hai toh IP address store hoga
  },
  {
    timestamps: true,
  }
);

const blogView = mongoose.model("blogViewers", BlogViewSchema);
const blogModel = mongoose.model("blogs", BlogSchema);

export { blogView, blogModel };
