import React, { useState } from 'react';
import { ForumPost } from '../types';
import { OfficialLogoBadge } from './Logo';

interface CommunityForumViewProps {
  posts: ForumPost[];
  onAddPost: (newPost: Partial<ForumPost>) => void;
  onLikePost: (id: string) => void;
}

export const CommunityForumView: React.FC<CommunityForumViewProps> = ({
  posts,
  onAddPost,
  onLikePost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedCategoryForm, setSelectedCategoryForm] = useState<ForumPost['category']>('hormonal_balance');

  const categories = [
    { id: 'all', label: 'Todos los Temas' },
    { id: 'hormonal_balance', label: 'Salud Hormonal 30+' },
    { id: 'joint_health', label: 'Articulaciones & Fuerza' },
    { id: 'work_life', label: 'Conciliación & Tiempo' },
    { id: 'perimenopause', label: 'Perimenopausia Temprana' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    onAddPost({
      title: postTitle,
      content: postContent,
      category: selectedCategoryForm,
      isAnonymous,
      author: isAnonymous ? 'Usuaria Anónima Protegida' : 'Valeria M.',
      authorAge: 35,
      authorTag: isAnonymous ? 'Comunidad 30+' : 'Consultora & Mamá',
      timeAgo: 'Hace un momento',
    });

    setPostTitle('');
    setPostContent('');
    setIsComposerOpen(false);
  };

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 pb-28 pt-2 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <OfficialLogoBadge size="sm" />
          <div>
            <h1 className="font-headline text-2xl text-[#1c1c19] font-medium leading-tight">
              Foro Comunitario Seguro
            </h1>
            <p className="text-xs text-[#706663] mt-0.5">
              Espacio moderado y confidencial para mujeres en sus 30s y 40s
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsComposerOpen(true)}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#904639] text-white hover:bg-[#ae5e4f] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">add_comment</span>
          <span>Compartir</span>
        </button>
      </div>

      {/* Safety Pledge Banner */}
      <div className="bg-[#cfe5d1]/50 border border-[#4f6353]/30 p-3 rounded-2xl flex items-center gap-2.5 text-xs text-[#536758]">
        <span className="material-symbols-outlined text-[#4f6353] text-[20px] shrink-0">
          verified_user
        </span>
        <p className="leading-snug">
          Comunidad 100% moderada, libre de juicios y basada en respeto clínico. Puedes participar con tu nombre o en modo anónimo seguro.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedCategory === cat.id
                ? 'bg-[#1c1c19] text-white border-[#1c1c19]'
                : 'bg-white text-[#706663] border-[#dac1bd]/40 hover:bg-[#f6f3ee]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Post Composer Modal */}
      {isComposerOpen && (
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-[#904639]/40 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#dac1bd]/30 pb-2">
            <h2 className="font-headline text-base font-semibold text-[#1c1c19]">
              Crear Nueva Publicación Segura
            </h2>
            <button
              onClick={() => setIsComposerOpen(false)}
              className="text-[#87726f] hover:text-[#1c1c19]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <form onSubmit={handleSubmitPost} className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-[#544340] block mb-1">
                Título o Pregunta:
              </label>
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Ej: ¿Qué rutina hacen cuando el cansancio de fase lútea coincide con entrega laboral?"
                required
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 focus:outline-none focus:ring-1 focus:ring-[#904639] text-[#1c1c19]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-semibold text-[#544340] block mb-1">
                  Categoría:
                </label>
                <select
                  value={selectedCategoryForm}
                  onChange={(e) =>
                    setSelectedCategoryForm(e.target.value as ForumPost['category'])
                  }
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 text-[#1c1c19]"
                >
                  <option value="hormonal_balance">Salud Hormonal 30+</option>
                  <option value="joint_health">Articulaciones & Fuerza</option>
                  <option value="work_life">Conciliación & Tiempo</option>
                  <option value="perimenopause">Perimenopausia Temprana</option>
                </select>
              </div>

              <div className="flex items-end pb-1">
                <label className="flex items-center gap-2 text-xs text-[#544340] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="accent-[#904639] w-4 h-4"
                  />
                  <span>Publicar en Modo Anónimo</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#544340] block mb-1">
                Tu Experiencia o Consulta:
              </label>
              <textarea
                rows={3}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="Comparte detalles con la comunidad. Elena y nuestras asesoras revisan el foro para brindar apoyo."
                required
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#f6f3ee] border border-[#dac1bd]/40 focus:outline-none focus:ring-1 focus:ring-[#904639] text-[#1c1c19]"
              />
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsComposerOpen(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#706663] hover:bg-[#f6f3ee]"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#904639] text-white hover:bg-[#ae5e4f] shadow-xs cursor-pointer"
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Posts Feed */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-[#dac1bd]/30 space-y-3"
          >
            {/* Author row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {post.isAnonymous ? (
                  <div className="w-9 h-9 rounded-full bg-[#ebe8e3] text-[#706663] flex items-center justify-center font-bold text-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      visibility_off
                    </span>
                  </div>
                ) : (
                  <img
                    src={post.avatarUrl}
                    alt={post.author}
                    className="w-9 h-9 rounded-full object-cover border border-[#dac1bd]/30"
                  />
                )}

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-[#1c1c19]">
                      {post.author}
                    </h3>
                    <span className="text-[11px] text-[#706663]">
                      ({post.authorAge} años)
                    </span>
                  </div>
                  <span className="text-[10px] text-[#4f6353] font-medium block">
                    {post.authorTag} • {post.timeAgo}
                  </span>
                </div>
              </div>

              <span className="text-[10px] bg-[#f6f3ee] text-[#544340] px-2 py-0.5 rounded-full font-medium">
                {post.category === 'hormonal_balance'
                  ? 'Salud Hormonal'
                  : post.category === 'joint_health'
                  ? 'Articulaciones'
                  : post.category === 'perimenopause'
                  ? 'Perimenopausia'
                  : 'Conciliación'}
              </span>
            </div>

            {/* Post Title & Content */}
            <div className="space-y-1.5">
              <h2 className="font-headline text-base font-semibold text-[#1c1c19] leading-snug">
                {post.title}
              </h2>
              <p className="text-xs text-[#544340] leading-relaxed">
                {post.content}
              </p>
            </div>

            {/* Specialist Verified Reply if present */}
            {post.verifiedSpecialistReply && (
              <div className="p-3 bg-[#cfe5d1]/30 border border-[#cfe5d1] rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1 text-[#4f6353] font-bold">
                  <span
                    className="material-symbols-outlined text-[14px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span>
                    Respuesta de {post.verifiedSpecialistReply.specialistName}
                  </span>
                  <span className="text-[10px] text-[#536758] font-normal">
                    ({post.verifiedSpecialistReply.specialistTitle})
                  </span>
                </div>
                <p className="text-[#384b3d] leading-relaxed italic">
                  "{post.verifiedSpecialistReply.reply}"
                </p>
              </div>
            )}

            {/* Actions: Likes & Comments */}
            <div className="flex items-center justify-between pt-2 border-t border-[#dac1bd]/20 text-xs">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onLikePost(post.id)}
                  className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                    post.userLiked ? 'text-[#904639]' : 'text-[#706663] hover:text-[#904639]'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={post.userLiked ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                  <span>{post.likesCount} me representa</span>
                </button>

                <div className="flex items-center gap-1 text-[#706663]">
                  <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                  <span>{post.commentsCount} respuestas</span>
                </div>
              </div>

              <button className="text-[11px] text-[#4f6353] font-semibold hover:underline">
                Responder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
