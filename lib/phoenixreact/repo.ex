defmodule Phoenixreact.Repo do
  use Ecto.Repo,
    otp_app: :phoenixreact,
    adapter: Ecto.Adapters.Postgres
end
