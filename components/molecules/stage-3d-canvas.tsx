'use client';

import { FC, useEffect, useRef, useState, DragEvent } from 'react';
import { StageLightingMode, WorkspaceSetup } from '@/types/workspace';
import { createThreeWorkspaceScene, ThreeSceneController } from '@/utils/three-scene';
import { RefreshCwIcon } from '@/components/atoms/icons';

export interface Stage3DCanvasProps {
  setup: WorkspaceSetup;
  lightingMode: StageLightingMode;
  onDropItem?: (itemId: string) => void;
  className?: string;
}

export const Stage3DCanvas: FC<Stage3DCanvasProps> = ({
  setup,
  lightingMode,
  onDropItem,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ThreeSceneController | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const initialPropsRef = useRef({ setup, lightingMode });

  useEffect(() => {
    if (!containerRef.current) return;

    const controller = createThreeWorkspaceScene(
      containerRef.current,
      initialPropsRef.current.setup,
      initialPropsRef.current.lightingMode
    );
    controllerRef.current = controller;

    return () => {
      controller.dispose();
      controllerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.update(setup, lightingMode);
    }
  }, [setup, lightingMode]);

  const handleResetCamera = () => {
    if (controllerRef.current) {
      controllerRef.current.resetView();
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const itemId = event.dataTransfer.getData('text/plain');
    if (itemId && onDropItem) {
      onDropItem(itemId);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden border transition-all duration-200 shadow-sm select-none ${
        isDragOver
          ? 'border-black ring-4 ring-black/30 scale-[1.01]'
          : 'border-neutral-200'
      } ${className}`}
    >
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {isDragOver && (
        <div className="absolute inset-x-8 top-4 z-50 bg-black text-white text-xs font-bold py-2.5 px-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 animate-bounce pointer-events-none">
          <span>Drop equipment here to snap into 3D workspace</span>
        </div>
      )}

      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
        <span className="px-2.5 py-1 rounded-full bg-black text-white text-[10px] font-bold shadow-2xs">
          Interactive 3D Studio
        </span>
        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-medium text-neutral-600 border border-neutral-200">
          Drag to Orbit • Scroll to Zoom
        </span>
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          type="button"
          onClick={handleResetCamera}
          aria-label="Reset Camera View"
          className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-700 hover:text-black border border-neutral-200 hover:border-black flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
        >
          <RefreshCwIcon size={14} />
        </button>
      </div>

      <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
        <span className="text-[11px] font-medium text-neutral-600 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-neutral-200">
          Real-time Bali Equipment Renderer
        </span>
      </div>
    </div>
  );
};
