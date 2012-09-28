Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '282324831851627', 'ce4aaeb4e63d13ed2e6adea6eb354181'
  provider :google, 'fusegap.org', 'GBhAKlZ1k4Qme-5fzF2LvaRT'
  provider :twitter, '282324831851627', 'ce4aaeb4e63d13ed2e6adea6eb354181'
end