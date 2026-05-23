"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";

const ease = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeUp({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.9, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* Stagger — parent defines the stagger timing, children inherit */
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

interface StaggerGridProps extends Omit<Props, "delay"> {
  tag?: "div" | "ul" | "ol";
}

export function StaggerGrid({ children, className, style, tag = "div" }: StaggerGridProps) {
  const Tag = tag === "ul" ? motion.ul : tag === "ol" ? motion.ol : motion.div;
  return (
    <Tag
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-60px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className, style }: Omit<Props, "delay">) {
  return (
    <motion.div className={className} style={style} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* Button with hover/tap interaction */
interface BtnProps extends Props {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function AnimatedLink({ children, href, target, rel, className, style, delay = 0 }: BtnProps) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay, ease }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

/* Image reveal with a clip-path sweep */
export function ImageReveal({ children, delay = 0, className, style }: Props) {
  return (
    <motion.div
      className={className}
      style={{ ...style, overflow: "hidden" }}
      initial={{ opacity: 0, scale: 1.06 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
