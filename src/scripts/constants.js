export const WIDTH = 800;
export const HEIGHT = 800;
export const BOTTOM_MARGIN = 60;
export const LEFT_MARGIN = 60;
export const TOP_MARGIN = 30;
export const RIGHT_MARGIN = 60;
export const DISPLAYABLE_COLS = ["Age", "G","GS","MP","FG","FGA","FG%","3P","3PA","3P%","2P","2PA","2P%","eFG%","FT","FTA","FT%","ORB","DRB","TRB","AST","STL","BLK","TOV","PF","PTS", "PER","TS%","3PAr","FTr","ORB%","DRB%","TRB%","AST%","STL%","BLK%","TOV%","USG%","OWS","DWS","WS","WS/48","OBPM","DBPM","BPM","VORP"]

export const DESCRIPTIONS = {
  "Age": "Player's age on Februrary 1st of the season",
  "G": "Games Played",
  "GS": "Games Started",
  "MP": "Minutes Played Per Game",
  "FG": "Field Goals Scored Per Game",
  "FGA": "Field Goal Attempts Per Game",
  "FG%": "Field Goals %",
  "3P": "3-point Field Goals Scored Per Game",
  "3PA": "3-point Field Goal Attempts Per Game",
  "3P%": "3-point Field Goals %",
  "2P": "2-point Field Goals Scored Per Game",
  "2PA": "2-point Field Goal Attempts Per Game",
  "2P%": "2-point Field Goals %",
  "eFG%": "Effective Field Goal % - adjusts for the fact that a 3-point field goal is worth more than a 2-point field goal",
  "FT": "Free Throws Per Game",
  "FTA": "Free Throw Attempts Per Game",
  "FT%": "Free Throw %",
  "ORB": "Offensive Rebounds Per Game",
  "DRB": "Defensive Rebounds Per Game",
  "TRB": "Total Rebounds Per Game",
  "AST": "Assists Per Game",
  "STL": "Steals Per Game",
  "BLK": "Blocks Per Game",
  "TOV": "Turnovers Per Game",
  "PF": "Personal Fouls Per Game",
  "PTS": "Points Per Game",
  "PER": "Player Efficiency Rating - measure of per-minute production standardized such that the league average is 15",
  "TS%": "True Shooting % - measure of shooting efficiency that takes into account 2-point field goals, 3-point field goals, and free throws",
  "3PAr": " 3-Point Attempt Rate - % of FG attempts from 3-point range",
  "FTr": "Free Throw Attempt Rate - number of FT attempts per FG attempt",
  "ORB%": "Offensive Rebound % - estimate of the % of available offensive rebounds a player grabbed while they were on the floor",
  "DRB%": "Defensive Rebound % - estimate of the % of available defensive rebounds a player grabbed while they were on the floor",
  "TRB%": "Total Rebound % - estimate of the % of available rebounds a player grabbed while they were on the floor",
  "AST%": "Assist % - estimate of the % of teammate field goals a player assisted while they were on the floor",
  "STL%": "Steal % - estimate of the % of opponent possessions that end with a steal by the player while they were on the floor",
  "BLK%": "Block % - estimate of the % of opponent two-point field goal attempts blocked by the player while they were on the floor",
  "TOV%": "Turnover % - estimate of turnovers committed per 100 plays",
  "USG%": "Usage % - estimate of the % of team plays used by a player while they were on the floor",
  "OWS": "Offensive Win Shares - estimate of the number of wins contributed by a player due to offense",
  "DWS": "Defensive Win Shares - estimate of the number of wins contributed by a player due to defense",
  "WS": "Win Shares - estimate of the number of wins contributed by a player",
  "WS/48": "Win Shares Per 48 Minutes - estimate of the number of wins contributed by a player per 48 minutes (league average is approximately .100)",
  "OBPM": "Offensive Box Plus/Minus - box score estimate of the offensive points per 100 possessions a player contributed above a league-average player, translated to an average team",
  "DBPM": "Defensive Box Plus/Minus - box score estimate of the defensive points per 100 possessions a player contributed above a league-average player, translated to an average team",
  "BPM": "Box Plus/Minus - box score estimate of the points per 100 possessions a player contributed above a league-average player, translated to an average team",
  "VORP": "Value over Replacement Player - box score estimate of the points per 100 TEAM possessions that a player contributed above a replacement-level (-2.0) player, translated to an average team and prorated to an 82-game season"
}
