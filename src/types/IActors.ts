export interface IActorData {
  adult: boolean;
  gender: number;
  id: number;
  known_for: string[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IActorModal {
  actor: IActorData | null;
  onClose: () => void;
}

export interface IActorModalContent {
  actor: IActorData | null;
}
