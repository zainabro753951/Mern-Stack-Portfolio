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
    allowComments: { type: Boolean, default: false },
    seoTitle: { type: String },
    seoKeywords: { type: [String], default: [] },
    blogDiscription: { type: String },
    socialMediaSharing: { type: Boolean, default: false },
    readTime: { type: Number },
    views: { type: Number, default: 0 },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "blogcomments" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "bloglikes" }],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const BlogViewSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogs",
    required: true,
  }, // ✅ Kis blog ko dekha gaya
  viewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }, // ✅ Kis user ne dekha
  viewedAt: { type: Date, default: Date.now },
});

// Likes Schema of Blog
const BlogLikeSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogs",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }, // Assuming you have a User model
  likedAt: { type: Date, default: Date.now },
});

// Comments Schema of blog

const BlogCommentSchema = new mongoose.Schema(
  {
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    parentCommentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogcomments",
      default: null, // Agar ye kisi comment ka reply hai to uska ID, otherwise null
    },
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogcomments",
      },
    ], // Yeh array us comment ke replies ko store karega
  },
  {
    timestamps: true,
  }
);

const blogCommentNotification = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogcomments",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const BlogCommentNotification = mongoose.model(
  "blogCommentNotifications",
  blogCommentNotification
);

const blogComment = mongoose.model("blogcomments", BlogCommentSchema);
const blogLike = mongoose.model("bloglikes", BlogLikeSchema);
const blogView = mongoose.model("blogViewers", BlogViewSchema);
const blogModel = mongoose.model("blogs", BlogSchema);

export { blogView, blogModel, blogComment, blogLike, BlogCommentNotification };
