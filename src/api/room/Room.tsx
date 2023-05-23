import { api } from "../connection.tsx";
import { RoomModel } from "./RoomModel.tsx";

export async function findAll() {
  return await api.get("/room/getAll");
}

export async function findById(id: string) {
  await api.get(`/room/findBy/${id}`);
}

export async function save(room: RoomModel) {
  await api.post("/room/save", {
    ...room,
  });
}

export async function update(room: RoomModel) {
  await api.put(`/room/update/${room.id}`, {
    ...room,
  });
}

export async function deleteById(id: string) {
  await api.delete(`/room/delete/${id}`);
}
