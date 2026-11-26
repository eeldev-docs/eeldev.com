// Each address points to the plugin's own site. Thumbnails live in public/plugins/<slug>.jpg (from the Fab listings).
export const plugins = [
  ['SteamCore PRO', 'Online', 'Steam sessions, achievements and Workshop for your game.', 'steamcore-pro'],
  ['Thumbnailer', 'Editor', 'Capture assets as inventory icons inside Unreal Editor.', 'thumbnailer'],
  ['Foliage Plugin', 'Gameplay', 'Build interactive foliage with PCG and Chaos destruction.', 'foliageplugin'],
  ['Host Migration Core', 'Online', 'Keep a listen-server session going when its host leaves.', 'hostmigrationcore'],
  ['EOSCore', 'Online', 'Integrate Epic Online Services into your Unreal project.', 'eoscore'],
  ['BlueprintCore', 'Editor', 'Manage editing access to your Blueprints.', 'blueprintcore'],
  ['Common Loading Screen', 'Gameplay', 'Customize the loading screens between levels.', 'cls'],
  ['EventDispatcher', 'Gameplay', 'Connect gameplay systems through events.', 'eventdispatcher'],
  ['Crossplay Core', 'Online', 'Explore cross-platform multiplayer integration.', 'crossplaycore'],
  ['Server Admin Core', 'Online', 'Manage and moderate dedicated and listen servers.', 'serveradmincore'],
  ['SteamCore', 'Online', 'Access Steam features from Unreal Engine.', 'steamcore'],
  ['SteamCore Web', 'Online', 'Work with the Steam Web API.', 'steamcoreweb'],
  ['EOSCore Lite', 'Online', 'Explore the lightweight Epic Online Services integration.', 'eoscore-lite'],
  ['AWS Plugins', 'Cloud', 'Connect Cognito, GameLift, Lambda, S3 and other AWS services.', 'aws']
].map(([name, category, description, subdomain]) => ({
  name, category, description, url: 'https://' + subdomain + '.eeldev.com/',
  image: '/plugins/' + name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.jpg'
}));
