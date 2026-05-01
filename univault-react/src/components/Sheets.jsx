// Shared interactive components used across all screens
import React, { useState } from 'react';

// ── Bottom Sheet Form ─────────────────────────────────────────────────────────
export function FormSheet({ title, fields, submitLabel = 'Submit', onClose, onSubmit }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setValues(prev => ({ ...prev, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit && onSubmit(values);
    setTimeout(onClose, 1800);
  };

  return (
    <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.5)', backdropFilter:'blur(8px)', zIndex:400, display:'flex', alignItems:'flex-end' }}
      onClick={onClose}>
      <div style={{
        background:'#ffffff', width:'100%', borderRadius:'28px 28px 0 0',
        padding:'0 0 32px', animation:'slideUp .38s cubic-bezier(.34,1.2,.64,1) both',
        maxHeight:'88%', overflowY:'auto',
      }} onClick={e => e.stopPropagation()}>
        {/* Handle */}
        <div style={{ width:36, height:4, background:'#E5E5E5', borderRadius:2, margin:'14px auto 0' }} />

        {submitted ? (
          <div style={{ textAlign:'center', padding:'40px 20px' }}>
            <div style={{ fontSize:52, marginBottom:12, animation:'popIn .5s cubic-bezier(.34,1.4,.64,1) both' }}>✅</div>
            <div style={{ fontFamily:'Inter, sans-serif', fontWeight:800, fontSize:18, color:'#1B1916', marginBottom:6 }}>Done!</div>
            <div style={{ fontFamily:'Roboto, sans-serif', fontSize:13, color:'#9A9894' }}>Your submission was received.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding:'16px 20px 0' }}>
            <h2 style={{ fontFamily:'Inter, sans-serif', fontWeight:800, fontSize:20, color:'#1B1916', marginBottom:18 }}>{title}</h2>
            {fields.map(f => (
              <div key={f.key} style={{ marginBottom:14 }}>
                <label style={{ fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:'.04em', color:'#9A9894', display:'block', marginBottom:6 }}>{f.label}</label>
                {f.type === 'select' ? (
                  <select className="input" value={values[f.key] || ''} onChange={e => set(f.key, e.target.value)} required={f.required}>
                    <option value="">Choose…</option>
                    {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === 'textarea' ? (
                  <textarea className="input" rows={3} placeholder={f.placeholder} value={values[f.key] || ''} onChange={e => set(f.key, e.target.value)} required={f.required} style={{ resize:'none' }} />
                ) : (
                  <input className="input" type={f.type || 'text'} placeholder={f.placeholder} value={values[f.key] || ''} onChange={e => set(f.key, e.target.value)} required={f.required} />
                )}
              </div>
            ))}
            <button type="submit" style={{
              width:'100%', padding:'14px 0', borderRadius:14, border:'none',
              background:'linear-gradient(135deg, #1C3F6E, #2A5FA0)',
              color:'#fff', fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:14, cursor:'pointer',
              marginTop:6, transition:'transform .15s', boxShadow:'0 8px 24px rgba(28,63,110,0.25)',
            }}
              onMouseEnter={e => e.currentTarget.style.transform='scale(1.01)'}
              onMouseLeave={e => e.currentTarget.style.transform=''}
            >{submitLabel}</button>
          </form>
        )}
      </div>
    </div>
  );
}

// ── Confirm Dialog ───────────────────────────────────────────────────────────
export function ConfirmDialog({ icon, title, body, confirmLabel, confirmStyle, cancelLabel = 'Cancel', onConfirm, onCancel }) {
  return (
    <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.5)', backdropFilter:'blur(8px)', zIndex:400, display:'flex', alignItems:'center', justifyContent:'center', padding:'0 24px' }}
      onClick={onCancel}>
      <div style={{
        background:'#ffffff', borderRadius:24, padding:'32px 24px',
        width:'100%', maxWidth:320, animation:'scaleIn .32s cubic-bezier(.34,1.2,.64,1) both',
        textAlign:'center', boxShadow:'0 24px 64px rgba(0,0,0,0.15)',
      }} onClick={e => e.stopPropagation()}>
        {icon && <div style={{ fontSize:44, marginBottom:12 }}>{icon}</div>}
        <div style={{ fontFamily:'Inter, sans-serif', fontWeight:800, fontSize:18, color:'#1B1916', marginBottom:8 }}>{title}</div>
        {body && <div style={{ fontFamily:'Roboto, sans-serif', fontSize:13, color:'#9A9894', lineHeight:1.6, marginBottom:20 }}>{body}</div>}
        <div style={{ display:'flex', gap:10 }}>
          <button onClick={onCancel} style={{ flex:1, padding:'12px 0', borderRadius:12, border:'1px solid #ECEAE5', background:'transparent', fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:13, color:'#1B1916', cursor:'pointer' }}>{cancelLabel}</button>
          <button onClick={onConfirm} style={{ flex:1.5, padding:'12px 0', borderRadius:12, border:'none', background: confirmStyle === 'danger' ? '#FA5555' : 'linear-gradient(135deg, #1C3F6E, #2A5FA0)', color:'#fff', fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:13, cursor:'pointer', boxShadow: confirmStyle === 'danger' ? '0 8px 20px rgba(250,85,85,0.25)' : '0 8px 20px rgba(28,63,110,0.25)' }}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Success Sheet ────────────────────────────────────────────────────────────
export function SuccessSheet({ icon = '🎉', title, body, cta, onClose }) {
  return (
    <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.5)', backdropFilter:'blur(8px)', zIndex:400, display:'flex', alignItems:'flex-end' }}
      onClick={onClose}>
      <div style={{ background:'#ffffff', width:'100%', borderRadius:'28px 28px 0 0', padding:'32px 24px 36px', animation:'slideUp .38s cubic-bezier(.34,1.2,.64,1) both', textAlign:'center', boxShadow:'0 -12px 48px rgba(0,0,0,0.1)' }}
        onClick={e => e.stopPropagation()}>
        <div style={{ fontSize:56, marginBottom:14, animation:'bounceIn .5s cubic-bezier(.34,1.4,.64,1) both' }}>{icon}</div>
        <div style={{ fontFamily:'Inter, sans-serif', fontWeight:800, fontSize:22, color:'#1B1916', marginBottom:8 }}>{title}</div>
        {body && <div style={{ fontFamily:'Roboto, sans-serif', fontSize:13, color:'#9A9894', lineHeight:1.6, marginBottom:22 }}>{body}</div>}
        <button onClick={onClose} style={{ width:'100%', padding:'14px 0', borderRadius:14, border:'none', background:'linear-gradient(135deg, #1C3F6E, #2A5FA0)', color:'#fff', fontFamily:'Inter, sans-serif', fontWeight:700, fontSize:14, cursor:'pointer', boxShadow:'0 8px 24px rgba(28,63,110,0.25)' }}>
          {cta || 'Got it!'}
        </button>
      </div>
    </div>
  );
}
