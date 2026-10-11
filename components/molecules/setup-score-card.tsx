import { FC } from 'react';
import { SetupScore } from '@/types/workspace';

export interface SetupScoreCardProps {
  score: SetupScore;
}

export const SetupScoreCard: FC<SetupScoreCardProps> = ({ score }) => {
  return (
    <div className="bg-neutral-50 p-3 rounded-2xl border border-neutral-200 space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-neutral-900">
        <span>Workspace Score</span>
        <span className="text-black font-bold">
          {Math.round((score.ergonomics + score.zen + score.productivity) / 3)}/100
        </span>
      </div>

      <div className="space-y-1.5">
        <div>
          <div className="flex justify-between text-[11px] text-neutral-600 mb-0.5">
            <span>Ergonomics</span>
            <span className="font-semibold text-neutral-900">{score.ergonomics}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all duration-300"
              style={{ width: `${score.ergonomics}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] text-neutral-600 mb-0.5">
            <span>Bali Zen Vibe</span>
            <span className="font-semibold text-neutral-900">{score.zen}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-700 rounded-full transition-all duration-300"
              style={{ width: `${score.zen}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[11px] text-neutral-600 mb-0.5">
            <span>Productivity</span>
            <span className="font-semibold text-neutral-900">{score.productivity}%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${score.productivity}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
