import React, { useState } from 'react';
import { Phone, Users, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import president from './people/president.js';
import vicePresident from './people/vice-president.js';
import secretary from './people/secretary.js';
import jointSecretary from './people/joint-secretary.js';
import treasurer from './people/treasurer.js';
import publicRelationOfficer from './people/public-relation-officer.js';
import researchCoordinator from './people/research-coordinator.js';
import innovationCoordinator from './people/innovation-coordinator.js';
import designLead from './people/design-lead.js';
import mediaLead from './people/media-lead.js';
import mediaCoLead from './people/media-co-lead.js';
import techLead from './people/tech-lead.js';
import techCoLead from './people/tech-co-lead.js';
import outreachLead from './people/outreach-lead.js';
import outreachCoLead from './people/outreach-co-lead.js';
import documentationLead from './people/documentation-lead.js';
import documentationCoLead from './people/documentation-co-lead.js';
import operationsLead from './people/operations-lead.js';
import operationsCoLead from './people/operations-co-lead.js';
import photographyLead from './people/photography-lead.js';
import photographyCoLead from './people/photography-co-lead.js';

const people = [president, vicePresident, secretary, jointSecretary, treasurer, publicRelationOfficer, researchCoordinator, innovationCoordinator, designLead, mediaLead, mediaCoLead, techLead, techCoLead, outreachLead, outreachCoLead, documentationLead, documentationCoLead, operationsLead, operationsCoLead, photographyLead, photographyCoLead].map(person => ({...person, initial: person.name === 'Name to be added' ? 'G' : person.name.charAt(0)}));
const basePath = import.meta.env.BASE_URL;
const sitePath = path => `${basePath}${path.replace(/^\/+/, '')}`;
const griLinkedIn = 'https://www.linkedin.com/company/centre-for-grassroots-research-innovation-gri/';
const griInstagram = 'https://www.instagram.com/jainresearch_gri?stkn=bjAxZHY1Z2oyMXdx';
function currentPage(){ let path=decodeURI(location.pathname);if(path.startsWith(basePath))path=`/${path.slice(basePath.length)}`;path=path.replace(/^\/+|\/+$/g,'');const parts=path.split('/').filter(Boolean);const slug=parts.length===1?parts[0]:parts.length===2&&parts[0]==='office-bearers'?parts[1]:null;const person=people.find(p=>p.slug===slug);return person?{view:'profile',person}:{view:'not-found'}; }
function App(){ const [page,setPage]=useState(currentPage);
  React.useEffect(()=>{const cb=()=>setPage(currentPage());window.addEventListener('popstate',cb);return()=>window.removeEventListener('popstate',cb)},[]);
  if(page.view!=='profile')return <main className="not-found-page"><section className="not-found"><span className="eyebrow"><i/>404 - Page not found</span><h1>This page is not available</h1><p>Only individual GRI office bearer profile links are available on this site.</p></section></main>;
  return <main className="profile-only"><Profile person={page.person}/></main>;
}
function Profile({person}){return <div className="profile-page"><section className="profile-hero"><div className="profile-avatar">{person.photo?<img src={sitePath(person.photo)} alt={person.name}/>:person.initial}</div><h1>{person.name}</h1><span className="role-chip">{person.role}</span><div className="profile-meta"><span>{person.branch}</span><span>{person.year}</span></div><div className="uni-chip"><MapPin size={14}/> Centre for Grassroots Research &amp; Innovation · JAIN University</div></section><section className="detail-section profile-connect"><h2><Users size={16}/> Connect</h2><div className="social-links personal-links">{person.phone?<a href={`tel:${person.phone}`}><Phone size={16}/> {person.phone}</a>:<span className="profile-placeholder"><Phone size={16}/> Mobile number to be added</span>}{person.linkedin&&<a href={person.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> Personal LinkedIn</a>}{person.github&&<a href={person.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>}{person.instagram&&<a href={person.instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram</a>}</div><h2 className="gri-social-heading">GRI</h2><div className="social-links gri-links"><a href={griLinkedIn} target="_blank" rel="noreferrer"><Linkedin size={16}/> GRI LinkedIn</a><a href={griInstagram} target="_blank" rel="noreferrer"><Instagram size={16}/> GRI Instagram</a></div></section><div className="profile-signoff"><div className="signoff-mark">G</div><b>Centre for Grassroots Research &amp; Innovation</b><span>JAIN (Deemed-to-be University), Bengaluru</span></div></div>}
export default App;
