import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, User, Heart, Share2, MoreHorizontal } from 'lucide-react';
import { format } from 'timeago.js';

const Community = ({ userData }) => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [showComments, setShowComments] = useState({});
  const firebaseUrl = 'https://skillswap-6f398-default-rtdb.firebaseio.com/community.json';

  const fetchPosts = async () => {
    try {
      const res = await fetch(firebaseUrl);
      const data = await res.json();
      if (data) {
        const loadedPosts = Object.entries(data).map(([id, post]) => ({ id, ...post }));
        setPosts(loadedPosts.reverse());
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (!postText.trim()) return;

    const newPost = {
      text: postText,
      user: {
        name: userData?.name || userData?.email || 'Anonymous',
        avatar: userData?.photoURL || '',
      },
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    try {
      await fetch(firebaseUrl, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' },
      });
      setPostText('');
      fetchPosts();
    } catch (err) {
      console.error('Post error:', err);
    }
  };

  const handleComment = (postId, commentText) => {
    if (!commentText.trim()) return;
    const newComment = {
      text: commentText,
      user: {
        name: userData?.name || userData?.email || 'Anonymous',
        avatar: userData?.photoURL || '',
      },
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));
  };

  const handleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const toggleComments = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    sidebar: {
      position: 'fixed',
      height: '100vh',
      width: '288px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid #f1f5f9',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    userProfile: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px',
    },
    avatar: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: '#e0e7ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      color: '#4f46e5',
      fontSize: '18px',
      border: '2px solid #e0e7ff',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    userName: {
      fontWeight: 600,
      color: '#1e293b',
      fontSize: '16px',
    },
    userRole: {
      fontSize: '12px',
      color: '#4f46e5',
      backgroundColor: '#eef2ff',
      padding: '4px 8px',
      borderRadius: '9999px',
      display: 'inline-block',
    },
    navButton: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '12px',
      fontWeight: 500,
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
    },
    activeNavButton: {
      backgroundColor: '#eef2ff',
      color: '#4f46e5',
    },
    inactiveNavButton: {
      color: '#64748b',
    },
    tipBox: {
      marginTop: 'auto',
      padding: '16px',
      backgroundColor: '#eef2ff',
      borderRadius: '12px',
    },
    tipTitle: {
      fontWeight: 500,
      color: '#4f46e5',
      fontSize: '14px',
      marginBottom: '8px',
    },
    tipText: {
      fontSize: '12px',
      color: '#4f46e5',
    },
    mainContent: {
      marginLeft: '288px',
      padding: '5px',
      width:"70%",
    },
    container: {
      maxWidth: '672px',
      margin: '0 auto',
    },
    fixedPostBox: {
      position: 'sticky',
      top: '32px',
      zIndex: 10,
       backgroundColor: '#f8fafc',
      padding: '24px',
      // borderRadius: '16px',
      // boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginBottom: '32px',
      // border: '1px solid #e2e8f0',
      width:"100%"
    },
    input: {
      width: '100%',
      border: '1px solid #e2e8f0',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '15px',
      resize: 'none',
      marginBottom: '16px',
      minHeight: '120px',
      fontFamily: 'inherit',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    inputFocus: {
      borderColor: '#818cf8',
    },
    postButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '12px',
      background: 'linear-gradient(to right, #6366f1, #818cf8)',
      color: '#ffffff',
      fontWeight: 600,
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'opacity 0.2s',
    },
    postButtonHover: {
      opacity: 0.9,
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      marginBottom: '24px',
      border: '1px solid #e2e8f0',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
      gap: '16px',
    },
    postAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#e0e7ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      color: '#4f46e5',
      fontSize: '16px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    postUser: {
      fontWeight: 600,
      color: '#1e293b',
      fontSize: '15px',
    },
    postTime: {
      fontSize: '13px',
      color: '#64748b',
      marginTop: '2px',
    },
    postText: {
      fontSize: '15px',
      color: '#334155',
      lineHeight: '1.6',
      marginBottom: '16px',
    },
    postActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      paddingTop: '12px',
      borderTop: '1px solid #f1f5f9',
    },
    actionButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#64748b',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
    },
    likedButton: {
      color: '#dc2626',
    },
    commentSection: {
      marginTop: '16px',
      paddingTop: '16px',
      borderTop: '1px solid #f1f5f9',
    },
    commentInput: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      fontSize: '14px',
      marginTop: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    comment: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginTop: '16px',
      paddingBottom: '16px',
      borderBottom: '1px solid #f1f5f9',
    },
    commentAvatar: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#dbeafe',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 500,
      color: '#3b82f6',
      fontSize: '14px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    commentContent: {
      flex: 1,
    },
    commentUser: {
      fontWeight: 600,
      color: '#1e293b',
      fontSize: '14px',
    },
    commentText: {
      fontSize: '14px',
      color: '#475569',
      marginTop: '4px',
    },
    commentTime: {
      fontSize: '12px',
      color: '#94a3b8',
      marginTop: '4px',
    },
    emptyState: {
      textAlign: 'center',
      color: '#94a3b8',
      padding: '48px 0',
    },
  };

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.userProfile}>
          <div 
            style={{
              ...styles.avatar,
              backgroundImage: userData?.photoURL ? `url(${userData.photoURL})` : 'none',
            }}
          >
            {!userData?.photoURL && (userData?.name?.[0]?.toUpperCase() || 'U')}
          </div>
          <div>
            <div style={styles.userName}>{userData?.name}</div>
            <div style={styles.userRole}>{userData?.role || 'Member'}</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <button style={{ ...styles.navButton, ...styles.activeNavButton }}>
            <MessageSquare size={18} />
            <span>Community Feed</span>
          </button>
          <button style={{ ...styles.navButton, ...styles.inactiveNavButton }}>
            <User size={18} />
            <span>My Posts</span>
          </button>
        </div>

        <div style={styles.tipBox}>
          <div style={styles.tipTitle}>Community Tips</div>
          <div style={styles.tipText}>
            Share knowledge, ask questions, and connect with other professionals.
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.container}>
          {/* Fixed Create Post */}
          <div style={styles.fixedPostBox}>
            <textarea
              style={styles.input}
              rows="3"
              placeholder="Share something with the community..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              onFocus={(e) => e.target.style.borderColor = '#818cf8'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
            <button 
              style={styles.postButton}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
              onClick={handlePost}
            >
              <Send size={16} /> Post
            </button>
          </div>

          {/* Posts List */}
          {posts.length === 0 ? (
            <div style={styles.emptyState}>
              No posts yet. Start the conversation!
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} style={styles.card}>
                <div style={styles.header}>
                  <div 
                    style={{
                      ...styles.postAvatar,
                      backgroundImage: post.user?.avatar ? `url(${post.user.avatar})` : 'none',
                    }}
                  >
                    {!post.user?.avatar && (post.user?.name?.[0]?.toUpperCase() || 'U')}
                  </div>
                  <div>
                    <div style={styles.postUser}>@{post.user?.name}</div>
                    <div style={styles.postTime}>{format(post.createdAt)}</div>
                  </div>
                </div>

                <div style={styles.postText}>{post.text}</div>

                <div style={styles.postActions}>
                  <button 
                    style={{
                      ...styles.actionButton,
                      ...(likes[post.id] ? styles.likedButton : {}),
                    }}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart size={16} fill={likes[post.id] ? '#dc2626' : 'none'} />
                    {likes[post.id] ? 'Liked' : 'Like'}
                  </button>
                  <button 
                    style={styles.actionButton}
                    onClick={() => toggleComments(post.id)}
                  >
                    <MessageSquare size={16} />
                    {showComments[post.id] ? 'Hide Comments' : 'Show Comments'}
                  </button>
                  <button style={styles.actionButton}>
                    <Share2 size={16} />
                    Share
                  </button>
                </div>

                {/* Comment Section - Conditionally Rendered */}
                {showComments[post.id] && (
                  <div style={styles.commentSection}>
                    {(comments[post.id] || []).map((comment, idx) => (
                      <div key={idx} style={styles.comment}>
                        <div 
                          style={{
                            ...styles.commentAvatar,
                            backgroundImage: comment.user?.avatar ? `url(${comment.user.avatar})` : 'none',
                          }}
                        >
                          {!comment.user?.avatar && (comment.user?.name?.[0]?.toUpperCase() || 'U')}
                        </div>
                        <div style={styles.commentContent}>
                          <div style={styles.commentUser}>@{comment.user?.name}</div>
                          <div style={styles.commentText}>{comment.text}</div>
                          <div style={styles.commentTime}>{format(comment.createdAt)}</div>
                        </div>
                      </div>
                    ))}

                    <input
                      style={styles.commentInput}
                      type="text"
                      placeholder="Add a comment..."
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value.trim()) {
                          handleComment(post.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#818cf8'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;